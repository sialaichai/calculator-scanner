// --- 1. Configuration ---

// Add your approved calculator model numbers here
// Normalized: uppercase, no spaces
const APPROVED_MODELS = new Set([
    "FX-991EX",
    "FX-82MS",
    "TI-84PLUS",
    "TI-30X"
]);

// How often to run the OCR (in milliseconds)
// 2000ms = 2 seconds. Don't set this too low!
const SCAN_INTERVAL = 2000; 

// --- 2. Get HTML Elements ---
const video = document.getElementById('video-feed');
const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d'); // Context for drawing
const statusText = document.getElementById('status-text');

let tesseractWorker;

// --- 3. Initialize the App ---
async function initializeApp() {
    statusText.innerText = "Loading Tesseract.js Worker...";
    
    // Initialize Tesseract.js worker
    tesseractWorker = await Tesseract.createWorker('eng', 1, {
        logger: m => {
            if (m.status === "recognizing text") {
                statusText.innerText = `Scanning... (${Math.round(m.progress * 100)}%)`;
            } else {
                console.log(m.status);
            }
        },
    });

    statusText.innerText = "Requesting Camera Access...";
    
    // Start the camera
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment' // Use the back camera on phones
            }
        });
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            // Set canvas size to match video feed
            overlay.width = video.videoWidth;
            overlay.height = video.videoHeight;
            
            // Start the scanning loop
            statusText.innerText = "Point at a calculator";
            setInterval(performScan, SCAN_INTERVAL);
        };
    } catch (err) {
        console.error("Camera Error:", err);
        statusText.innerText = "Camera access denied or unavailable.";
    }
}

// --- 4. The Scanning Function ---
async function performScan() {
    if (!tesseractWorker) return;

    // 1. Capture a frame from the video
    // We draw the video frame onto the canvas to get an image
    ctx.drawImage(video, 0, 0, overlay.width, overlay.height);
    const imageToScan = overlay.toDataURL('image/jpeg');

    // 2. Perform OCR
    const { data } = await tesseractWorker.recognize(imageToScan);

    // 3. Process the results
    processOcrResult(data);
}

// --- 5. Process and Draw Results ---
function processOcrResult(data) {
    const detectedText = data.text.toUpperCase().replace(/\s+/g, "");
    let isApproved = false;
    let foundModel = null;

    // Check detected text against the approved list
    for (const model of APPROVED_MODELS) {
        if (detectedText.includes(model)) {
            isApproved = true;
            foundModel = model;
            break;
        }
    }

    // Update status text
    if (isApproved) {
        statusText.innerText = `APPROVED (${foundModel})`;
        statusText.style.color = "#00FF00"; // Green
    } else {
        statusText.innerText = "NOT APPROVED";
        statusText.style.color = "#FF4136"; // Red
    }

    // Draw bounding boxes
    drawBoundingBoxes(data.words, isApproved);
}

function drawBoundingBoxes(words, isApproved) {
    // Clear the canvas before drawing new boxes
    ctx.clearRect(0, 0, overlay.width, overlay.height);

    // Set box color
    const color = isApproved ? "#00FF00" : "#FF4136";
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.font = '20px Arial';
    ctx.fillStyle = color;

    words.forEach(word => {
        const box = word.bbox;
        
        // Draw the box
        ctx.strokeRect(box.x0, box.y0, box.x1 - box.x0, box.y1 - box.y0);
        
        // Draw the text
        ctx.fillText(word.text, box.x0, box.y0 > 20 ? box.y0 - 5 : 20); // Draw text above box
    });
}

// --- 6. Start the whole thing ---
initializeApp();
// --- 1. Configuration ---

/**
 * APPROVED_CALCULATOR_MAP
 * Key: Normalized model (all caps, no special chars)
 * Value: Full display name (Brand + Model)
 * Data populated from the SEAB PDF (Updated 31st October 2024).
 */
const APPROVED_CALCULATOR_MAP = new Map([
    // --- Page 2: Current Scientific ---
    ['FX82MS', 'CASIO FX 82MS'],
    ['FX85MS', 'CASIO FX 85MS'],
    ['FX95MS', 'CASIO FX 95MS'],
    ['FX96SGPLUS', 'CASIO FX 96SG Plus'],
    ['FX97SGX', 'CASIO FX 97SG X'],
    ['FX350MS', 'CASIO FX 350MS'],
    ['F960SG', 'CANON F-960SG'],
    ['HP10SPLUS', 'HP 10S+'], // HEWLETT PACKARD
    ['ELW531SII', 'SHARP EL W531S II'],
    ['ELW531SIISILVEREDITION', 'SHARP EL W531S II Silver Edition'],

    // --- Page 2: Current Graphing ---
    ['FX9860GILS', 'CASIO FX-9860GIls'],
    ['TI84PLUSCE', 'TEXAS INSTRUMENTS TI-84 Plus CE'],
    ['TI84PLUSCEPYTHON', 'TEXAS INSTRUMENTS TI-84 Plus CE Python'],

    // --- Page 3: Previously Approved CASIO ---
    ['FX82AU', 'CASIO FX 82AU'],
    ['FX82C', 'CASIO FX 82C'],
    ['FX82D', 'CASIO FX 82D'],
    ['FX82L', 'CASIO FX 82L'],
    ['FX82LB', 'CASIO FX 82LB'],
    ['FX82SUPER', 'CASIO FX 82SUPER'],
    ['FX82SX', 'CASIO FX 82SX'],
    ['FX82TL', 'CASIO FX 82TL'],
    ['FX82W', 'CASIO FX 82W'],
    ['FX85N', 'CASIO FX 85N'],
    ['FX85S', 'CASIO FX 85S'],
    ['FX85V', 'CASIO FX 85V'],
    ['FX85VH', 'CASIO FX 85VH'],
    ['FX95SGPLUS', 'CASIO FX 95 SG Plus'],
    ['FX100C', 'CASIO FX 100C'],
    ['FX100D', 'CASIO FX 100D'],
    ['FX100S', 'CASIO FX 100S'],
    ['FX100V', 'CASIO FX 100V'],
    ['FX100Z', 'CASIO FX 100Z'],
    ['FX115D', 'CASIO FX 115D'],
    ['FX115N', 'CASIO FX 115N'],
    ['FX115S', 'CASIO FX 115S'],
    ['FX115V', 'CASIO FX 115V'],
    ['FX135', 'CASIO FX 135'],
    ['FX350C', 'CASIO FX 350C'],
    ['FX350D', 'CASIO FX 350D'],
    ['FX350HA', 'CASIO FX 350HA'],
    ['FX350HB', 'CASIO FX 350HB'],
    ['FX350TL', 'CASIO FX 350TL'],
    ['FX350TLG', 'CASIO FX 350TLG'],
    ['FX350W', 'CASIO FX 350W'],
    ['FXD400', 'CASIO FX D400'],
    ['FX451M', 'CASIO FX 451M'],
    ['FX500MS', 'CASIO FX 500MS'],
    ['FX570AD', 'CASIO FX 570AD'],
    ['FX570AV', 'CASIO FX 570AV'],
    ['FX570CD', 'CASIO FX 570CD'],
    ['FX570CV', 'CASIO FX 570CV'],
    ['FX570S', 'CASIO FX 570S'],
    ['FX570Z', 'CASIO FX 570Z'],
    ['FX820MS', 'CASIO FX 820MS'],
    ['FX901', 'CASIO FX 901'],
    ['FX911S', 'CASIO FX 911S'],
    ['FX911SA', 'CASIO FX 911SA'],
    ['FX911W', 'CASIO FX 911W'],
    ['FX911Z', 'CASIO FX 911Z'],
    ['FX991D', 'CASIO FX 991D'],
    ['FX991N', 'CASIO FX 991N'],
    ['FX991S', 'CASIO FX 991S'],
    ['FX991V', 'CASIO FX 991V'],
    ['FX992S', 'CASIO FX 992S'],
    ['FX992V', 'CASIO FX 992V'],
    ['FX992VB', 'CASIO FX 992VB'],

    // --- Page 3: Previously Approved CANON ---
    ['F200', 'CANON F 200'],
    ['F401', 'CANON F 401'],
    ['F402', 'CANON F 402'],
    ['F500', 'CANON F 500'],
    ['F501', 'CANON F 501'],
    ['F502', 'CANON F 502'],
    ['F601', 'CANON F 601'],
    ['F602', 'CANON F 602'],
    ['F604', 'CANON F 604'],
    ['F612', 'CANON F 612'],
    ['F715S', 'CANON F 715S'],
    ['F720', 'CANON F 720'],

    // --- Page 3: Previously Approved SHARP ---
    ['EL506L', 'SHARP EL 506L'],
    ['EL509G', 'SHARP EL 509G'],
    ['EL509L', 'SHARP EL 509L'],
    ['EL509MS', 'SHARP EL 509MS'],
    ['EL509R', 'SHARP EL 509R'],
    ['EL509V', 'SHARP EL 509V'],
    ['EL509VM', 'SHARP EL 509VM'],
    ['EL509W', 'SHARP EL 509W'],
    ['EL509WM', 'SHARP EL 509WM'],
    ['EL509WS', 'SHARP EL 509WS'],
    ['EL509X', 'SHARP EL 509X'],
    ['EL510R', 'SHARP EL 510R'],
    ['EL520G', 'SHARP EL 520G'],
    ['EL520L', 'SHARP EL 520L'],
    ['EL531GH', 'SHARP EL 531GH'],
    ['EL531LH', 'SHARP EL 531LH'],
    ['EL531P', 'SHARP EL 531P'],
    ['EL531RH', 'SHARP EL 531RH'],
    ['EL531V', 'SHARP EL 531V'],
    ['EL531VB', 'SHARP EL 531VB'],
    ['EL531VH', 'SHARP EL 531VH'],
    ['ELW531M', 'SHARP EL W531M'],
    ['EL546G', 'SHARP EL 546G'],
    ['EL546L', 'SHARP EL 546L'],
    ['EL546LV', 'SHARP EL 546LV'],
    ['EL546VA', 'SHARP EL 546VA'],
    ['EL553', 'SHARP EL 553'],
    ['EL556G', 'SHARP EL 556G'],
    ['EL556L', 'SHARP EL 556L'],
    ['ELW531S', 'SHARP EL W531S'],
    ['ELW531XM', 'SHARP EL W531XM'],
    ['EL533X', 'SHARP EL 533X'],

    // --- Page 3: Previously Approved TEXAS INSTRUMENTS ---
    ['BAIIPIUS', 'TEXAS INSTRUMENTS BA II PLUS'],
    ['BAREALESTATE', 'TEXAS INSTRUMENTS BA REAL ESTATE'],
    ['TI25STAT', 'TEXAS INSTRUMENTS TI 25 STAT'],
    ['BA35SOLAR', 'TEXAS INSTRUMENTS BA 35 SOLAR'],
    ['TI30CHALLENGER', 'TEXAS INSTRUMENTS TI 30 CHALLENGER'],
    ['TI30X', 'TEXAS INSTRUMENTS TI 30X'],
    ['TI30XA', 'TEXAS INSTRUMENTS TI 30XA'],
    ['TI30XIIS', 'TEXAS INSTRUMENTS TI 30XIIS'],
    ['TI30XIIB', 'TEXAS INSTRUMENTS TI 30XIIB'],
    ['TI30XSOLAR', 'TEXAS INSTRUMENTS TI 30XSOLAR'],
    ['TI32EXPLORERPLUS', 'TEXAS INSTRUMENTS TI 32 EXPLORER PLUS'],
    ['TI34', 'TEXAS INSTRUMENTS TI 34'],
    ['TI34II', 'TEXAS INSTRUMENTS TI 34II'],
    ['TI35X', 'TEXAS INSTRUMENTS TI 35X'],
    ['TI36XSOLAR', 'TEXAS INSTRUMENTS TI 36XSOLAR'],

    // --- Page 3: Previously Approved HEWLETT PACKARD ---
    ['HP6S', 'HP 6S'],
    ['HP6SSOLAR', 'HP 6S SOLAR'],
    ['HP8S', 'HP 8S'],
    ['HP9S', 'HP 9S'],
    ['HP10B', 'HP 10B'],
    ['HP10S', 'HP 10S'],
    ['HP14B', 'HP 14B'],

    // --- Page 3: Previously Approved AURORA ---
    ['SC110', 'AURORA SC 110'],
    ['SC120', 'AURORA SC 120'],
    ['SC150', 'AURORA SC 150'],
    ['SC170', 'AURORA SC 170'],
    ['SC200', 'AURORA SC 200'],
    ['SC210', 'AURORA SC 210'],
    ['SC260', 'AURORA SC 260'],
    ['SC500', 'AURORA SC 500'],
    ['SC550', 'AURORA SC 550'],

    // --- Page 4: Previously Approved FIAMO ---
    ['SC6', 'FIAMO SC 6'],
    ['SC20', 'FIAMO SC 20'],

    // --- Page 4: Previously Approved HOSEKI ---
    ['H1030', 'HOSEKI H 1030'],
    ['H1031', 'HOSEKI H 1031'],

    // --- Page 4: Previously Approved HUBBLE COMPUTING ---
    ['SC10B', 'HUBBLE SC 10B'],
    ['SC10C', 'HUBBLE SC 10C'],

    // --- Page 4: Previously Approved KARCE ---
    ['KC107', 'KARCE KC107'],
    ['KC108', 'KARCE KC108'],
    ['KC109', 'KARCE KC109'],
    ['KCS187', 'KARCE KC S187'],
    ['KCS3500', 'KARCE KC S3500'],

    // --- Page 4: Previously Approved Graphing CASIO ---
    ['FX9860GSLIM', 'CASIO FX 9860G Slim'],
    ['CFX9850GCPLUS', 'CASIO CFX 9850GC PLUS'],
    ['FX9860G', 'CASIO FX 9860G'],

    // --- Page 4: Previously Approved Graphing TEXAS INSTRUMENTS ---
    ['TI83PLUS', 'TEXAS INSTRUMENTS TI-83 Plus'],
    ['TI84PLUSPOCKETSE', 'TEXAS INSTRUMENTS TI-84 Plus Pocket SE'],
    ['TI84PLUSCSILVEREDITION', 'TEXAS INSTRUMENTS TI-84 Plus C Silver Edition'],
    ['TI84PLUS', 'TEXAS INSTRUMENTS TI-84 Plus'],
    ['TI84PLUSSILVEREDITION', 'TEXAS INSTRUMENTS TI-84 Plus Silver Edition'],
]);

// --- 2. Global Variables ---
// --- 2. Global Variables ---
const SCAN_INTERVAL_MS = 2000; // Scan every 2 seconds
let recognitionBox = { left: 0, top: 0, width: 0, height: 0 };
let tesseractWorker;
let videoTrack; // For tap-to-focus

// Hidden canvas for stable frame capture
const hiddenCanvas = document.createElement('canvas');
const hiddenCtx = hiddenCanvas.getContext('2d', { willReadFrequently: true });

// --- 3. Get HTML Elements ---
const video = document.getElementById('video-feed');
const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');
const statusText = document.getElementById('status-text');

// --- 4. Main Initialization Function ---
async function initializeApp() {
    
    // --- Step 1: Load the AI Model First ---
    statusText.innerHTML = "<p>Loading AI Model (this may take a moment)...</p>";
    
    tesseractWorker = await Tesseract.createWorker('eng', 1, {
        logger: m => {
            if (m.status === "recognizing text") {
                statusText.innerHTML = `<p>Scanning... (${Math.round(m.progress * 100)}%)</p>`;
            } else if (m.status === "loaded" || m.status === "initializing") {
                statusText.innerHTML = "<p>Loading AI Model...</p>";
            } else {
                console.log(m.status);
            }
        },
    });

    // Use whitelisting and Page Segmentation Mode 7 (single line)
    await tesseractWorker.setParameters({
        tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        tessedit_pageseg_mode: '7',
    });

    // --- Step 2: AI is loaded, now ask for the camera ---
    statusText.innerHTML = "<p>Requesting Camera Access...</p>";
    
    try {
        const constraints = {
            video: { 
                facingMode: 'environment'
            }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        videoTrack = stream.getVideoTracks()[0]; 
        
        // --- Step 3: Once the camera stream starts, set up the scanner ---
        video.onloadedmetadata = () => {
            overlay.width = video.videoWidth;
            overlay.height = video.videoHeight;
            
            const boxWidth = overlay.width * 0.9;
            const boxHeight = overlay.height * 0.25;
            
            recognitionBox.left = (overlay.width - boxWidth) / 2;
            recognitionBox.top = (overlay.height - boxHeight) / 2;
            recognitionBox.width = boxWidth;
            recognitionBox.height = boxHeight;

            // Set hidden canvas size to match ROI (NO TYPO)
            hiddenCanvas.width = recognitionBox.width;
            hiddenCanvas.height = recognitionBox.height;

            drawOverlay([]); // Draw initial guide box
            
            // --- Step 4: All loaded! Start the scanning loop ---
            statusText.innerHTML = "<p>Aim at calculator model number</p>";
            setInterval(performScan, SCAN_INTERVAL_MS);
        };
    } catch (err) {
        console.error("Camera Error:", err);
        statusText.innerHTML = "<p>Camera access denied. Please allow camera access in your browser settings.</p>";
    }
}

// --- 5. The Scanning Function ---
async function performScan() {
    // Make sure the worker is loaded and the video is playing
    if (!tesseractWorker || !video.srcObject) return;

    // 1. Draw the current video frame's ROI onto the hidden canvas
    hiddenCtx.drawImage(
        video, // source
        recognitionBox.left, recognitionBox.top, // source (x, y)
        recognitionBox.width, recognitionBox.height, // source (w, h)
        0, 0, // destination (x, y)
        recognitionBox.width, recognitionBox.height // destination (w, h)
    );
    
    // 2. Get the captured frame as a still image
    const imageToScan = hiddenCanvas.toDataURL('image/png');

    // 3. Scan the *still image*
    const { data: ocrData } = await tesseractWorker.recognize(imageToScan);

    // 4. Process the results
    processOcrResult(ocrData);
}

// --- 6. Levenshtein Distance Function ---
function calculateSimilarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength === 0) {
        return 100;
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength * 100;
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// --- 7. Process and Draw Results ---
function processOcrResult(data) {
    const originalDetectedText = data.text.toUpperCase().replace(/[^A-Z0-9]/g, "");

    const textVariations = new Set([
        originalDetectedText,
        originalDetectedText.replaceAll('B', '8'),
        originalDetectedText.replaceAll('8', 'B'),
        originalDetectedText.replaceAll('9', '8'),
        originalDetectedText.replaceAll('S', '5'),
        originalDetectedText.replaceAll('5', 'S'),
    ]);

    let matches = [];

    for (const detectedText of textVariations) {
        if (detectedText.length < 3) continue;
        
        for (const [normalizedModel, fullDisplayName] of APPROVED_CALCULATOR_MAP) {
            
            const similarity = calculateSimilarity(detectedText, normalizedModel);

            if (similarity > 30) {
                matches.push({
                    name: fullDisplayName,
                    percent: Math.round(similarity)
                });
            }
        }
    }

    const uniqueMatches = [...new Map(matches.map(m => [m.name, m])).values()];
    uniqueMatches.sort((a, b) => b.percent - a.percent);

    if (uniqueMatches.length > 0) {
        let listHtml = "<ul>";
        for (const match of uniqueMatches) {
            listHtml += `<li><strong>${match.percent}%</strong> ${match.name}</li>`;
        }
        listHtml += "</ul>";
        statusText.innerHTML = listHtml;
    } else {
        if (originalDetectedText.length > 0) {
            statusText.innerHTML = `<p style="text-align: center; color: #FF4136;">Detected: ${originalDetectedText}</p>`;
        } else {
            statusText.innerHTML = "<p style='text-align: center;'>Aim at calculator model number</p>";
        }
    }

    drawOverlay(data.words);
}

// --- 8. Draw Overlay Function ---
function drawOverlay(words = []) {
    ctx.clearRect(0, 0, overlay.width, overlay.height);

    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 6;
    ctx.strokeRect(
        recognitionBox.left,
        recognitionBox.top,
        recognitionBox.width,
        recognitionBox.height
    );

    ctx.strokeStyle = "#007aff"; // Blue
    ctx.lineWidth = 2;
    ctx.font = '20px Arial';
    ctx.fillStyle = "#007aff";

    words.forEach(word => {
        const box = word.bbox;
        const x = box.x0 + recognitionBox.left;
        const y = box.y0 + recognitionBox.top;
        const w = box.x1 - box.x0;
        const h = box.y1 - box.y0;

        ctx.strokeRect(x, y, w, h);
    });
}

// --- 9. Tap-to-Focus ---
video.addEventListener('click', () => {
    if (videoTrack && videoTrack.getCapabilities().focusMode) {
        console.log("Re-focusing camera...");
        
        videoTrack.applyConstraints({
            advanced: [{ focusMode: 'continuous' }]
        }).catch(e => console.error("Focus apply failed:", e));
        
        statusText.innerHTML = "<p style='text-align: center;'>Focusing...</p>";
        setTimeout(() => {
            statusText.innerHTML = "<p style='text-align: center;'>Aim at calculator model number</p>";
        }, 1000);
    }
});

// --- 10. Start the App ---
// This is the only thing that runs at the start.
initializeApp();


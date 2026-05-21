/*
* leCheckerMakerMaison v1.0
* https://www.surrendr.studio


⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣶⣦⡄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⢀⠀⢹⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣷⣄⠨⣿⣿⣿⡌⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣷⣿⣿⣿⣿⣿⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣴⣾⣿⣮⣝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⠟⣹⣿⡿⢿⣿⣿⣬⣶⣶⡶⠦⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣢⣙⣻⢿⣿⣿⣿⠎⢸⣿⠕⢹⣿⣿⡿⣛⣥⣀⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠉⠛⠿⡏⣿⡏⠿⢄⣜⣡⠞⠛⡽⣸⡿⣟⡋⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠾⠿⣿⠁⠀⡄⠀⠀⠰⠾⠿⠛⠓⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠠⢐⢉⢷⣀⠛⠠⠐⠐⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣠⣴⣶⣿⣧⣾⠡⠼⠎⢎⣋⡄⠆⠀⠱⡄⢉⠃⣦⡤⡀⠀⠀⠀⠀
⠀⠀⠐⠙⠻⢿⣿⣿⣿⣿⣿⣿⣄⡀⠀⢩⠀⢀⠠⠂⢀⡌⠀⣿⡇⠟⠀⠀⢄⠀
⠀⣴⣇⠀⡇⠀⠸⣿⣿⣿⣿⣽⣟⣲⡤⠀⣀⣠⣴⡾⠟⠀⠀⠟⠀⠀⠀⠀⡰⡀
⣼⣿⠋⢀⣇⢸⡄⢻⣟⠻⣿⣿⣿⣿⣿⣿⠿⡿⠟⢁⠀⠀⠀⠀⠀⢰⠀⣠⠀⠰
⢸⣿⡣⣜⣿⣼⣿⣄⠻⡄⡀⠉⠛⠿⠿⠛⣉⡤⠖⣡⣶⠁⠀⠀⠀⣾⣶⣿⠐⡀
⣾⡇⠈⠛⠛⠿⣿⣿⣦⠁SURRENDR.STUDIO⠃⠀⠀⠀⠰⠛⠉⠉⠀⠀
*/

const transparentBgCheckbox = document.getElementById('transparent-bg');
const bgColorWrapper = document.getElementById('bg-color-wrapper');
const backgroundColorInput = document.getElementById('background-color');

const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const invertBtn = document.getElementById('invert-colors');
const tilingInput = document.getElementById('tiling');
const tilingNumInput = document.getElementById('tiling-num'); 
const angleInput = document.getElementById('angle');
const offsetXInput = document.getElementById('offsetX');
const offsetYInput = document.getElementById('offsetY');
const roundnessInput = document.getElementById('roundness');

const borderColorInput = document.getElementById('border-color');
const borderThicknessInput = document.getElementById('border-thickness');
const borderThicknessNumInput = document.getElementById('border-thickness-num');

// AJOUT : Sélecteurs de Texte
const enableTextCheckbox = document.getElementById('enable-text');
const textControlsWrapper = document.getElementById('text-controls-wrapper');
const fontFamilySelect = document.getElementById('font-family');
const textInput = document.getElementById('text-input');
const textColorInput = document.getElementById('text-color');
const textSizeInput = document.getElementById('text-size');
const textOffsetXInput = document.getElementById('text-offset-x');
const textOffsetYInput = document.getElementById('text-offset-y');
const textSizeNumInput = document.getElementById('text-size-num');
const textOffsetXNumInput = document.getElementById('text-offset-x-num');
const textOffsetYNumInput = document.getElementById('text-offset-y-num');

const logoUploadInput = document.getElementById('logo-upload');
const logoSizeInput = document.getElementById('logoSize');
const logoSizeNumInput = document.getElementById('logoSize-num'); 

const tilingValue = document.getElementById('tiling-value');
const angleValue = document.getElementById('angle-value');
const offsetXValue = document.getElementById('offsetX-value');
const offsetYValue = document.getElementById('offsetY-value');
const roundnessValue = document.getElementById('roundness-value');
const borderThicknessValue = document.getElementById('border-thickness-value');
const textSizeValue = document.getElementById('text-size-value');
const textOffsetXValue = document.getElementById('text-offset-x-value');
const textOffsetYValue = document.getElementById('text-offset-y-value');
const logoSizeValue = document.getElementById('logoSize-value');

const previewCanvas = document.getElementById('preview-canvas');
const previewCtx = previewCanvas.getContext('2d');

const resolutionSelect = document.getElementById('download-resolution');
const downloadBtn = document.getElementById('download-btn');

const globalState = { logoImage: null };

const previewResolution = 1024;
previewCanvas.width = previewResolution;
previewCanvas.height = previewResolution;

// --- 2. FONCTION DE DESSIN PRINCIPALE (LA MAGIE DU CANVAS) ---

function drawPattern(ctx, width, height, params) {
    
    if (params.isTransparent) {
        ctx.clearRect(0, 0, width, height);
    } else {
        ctx.fillStyle = params.backgroundColor;
        ctx.fillRect(0, 0, width, height);
    }

    const squareSize = width / params.tiling;

    ctx.save();
    
    const offsetX = (params.offsetX / 100) * squareSize;
    const offsetY = (params.offsetY / 100) * squareSize;
    
    ctx.translate(width / 2, height / 2);
    ctx.rotate(params.angle * Math.PI / 180);
    ctx.translate(-width / 2, -height / 2);
    ctx.translate(offsetX, offsetY);

    const numSquaresToDraw = params.tiling * 3;
    const start = Math.floor(-numSquaresToDraw / 2);
    const end = Math.ceil(numSquaresToDraw / 2);
    
    const radius = (params.roundness / 100) * (squareSize / 2);
    const borderThicknessPx = (params.borderThickness / 100) * squareSize;
    
    for (let x = start; x < end; x++) {
        for (let y = start; y < end; y++) {
            
            const currentX = x * squareSize;
            const currentY = y * squareSize;
            
            const colorIndex = ((x + y) % 2 + 2) % 2;
            ctx.fillStyle = (colorIndex === 0) ? params.color1 : params.color2;
            
            defineRoundedRectPath(ctx, currentX, currentY, squareSize, squareSize, radius);
            ctx.fill();

            if (borderThicknessPx > 0) {
                ctx.strokeStyle = params.borderColor;
                ctx.lineWidth = borderThicknessPx;
                ctx.stroke(); 
            }

            // MODIFIÉ : Le dessin du texte dépend de 'isTextEnabled'
            if (params.isTextEnabled && params.text && colorIndex === 0) {
                const fontSize = (params.textSize / 100) * squareSize;
                
                // MODIFIÉ : Utilise la police de 'params.fontFamily'
                ctx.font = `bold ${fontSize}px ${params.fontFamily}`; 
                
                ctx.fillStyle = params.textColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                const textX = currentX + squareSize / 2 + params.textOffsetX;
                const textY = currentY + squareSize / 2 + params.textOffsetY;

                ctx.fillText(params.text, textX, textY);
            }

            // --- Logo (avec Clipping) ---
            if (globalState.logoImage && colorIndex === 1) {
                ctx.save(); 
                defineRoundedRectPath(ctx, currentX, currentY, squareSize, squareSize, radius);
                ctx.clip();
                
                const hRatio = squareSize / globalState.logoImage.width;
                const vRatio = squareSize / globalState.logoImage.height;
                const baseRatio = Math.min(hRatio, vRatio); 
                
                const zoomFactor = params.logoSize / 100; 
                const finalRatio = baseRatio * zoomFactor;

                const logoW = globalState.logoImage.width * finalRatio;
                const logoH = globalState.logoImage.height * finalRatio;
                
                const logoX = currentX + (squareSize - logoW) / 2;
                const logoY = currentY + (squareSize - logoH) / 2;

                ctx.drawImage(globalState.logoImage, logoX, logoY, logoW, logoH);
                
                ctx.restore(); 
            }
        }
    }

    ctx.restore();
}

function defineRoundedRectPath(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    if (ctx.roundRect) {
        ctx.roundRect(x, y, width, height, radius);
    } else {
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.arcTo(x + width, y, x + width, y + radius, radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
        ctx.lineTo(x + radius, y + height);
        ctx.arcTo(x, y + height, x, y + height - radius, radius);
        ctx.lineTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);
    }
    ctx.closePath();
}

// --- 3. FONCTIONS DE MISE À JOUR ET GESTIONNAIRES D'ÉVÉNEMENTS ---

function getParams() {
    // Mettre à jour les labels
    tilingValue.textContent = `${tilingNumInput.value}x${tilingNumInput.value}`;
    angleValue.textContent = `${angleInput.value}°`;
    offsetXValue.textContent = `${offsetXInput.value}%`;
    offsetYValue.textContent = `${offsetYInput.value}%`;
    roundnessValue.textContent = `${roundnessInput.value}%`; 
    borderThicknessValue.textContent = `${borderThicknessNumInput.value}%`;
    logoSizeValue.textContent = `${logoSizeNumInput.value}%`;
    textSizeValue.textContent = `${textSizeNumInput.value}%`;
    textOffsetXValue.textContent = `${textOffsetXNumInput.value}px`;
    textOffsetYValue.textContent = `${textOffsetYNumInput.value}px`;

    // Récupérer toutes les valeurs
    return {
        isTransparent: transparentBgCheckbox.checked, 
        backgroundColor: backgroundColorInput.value,
        color1: color1Input.value,
        color2: color2Input.value,
        tiling: parseInt(tilingNumInput.value) || 2, 
        angle: parseInt(angleInput.value),
        offsetX: parseInt(offsetXInput.value),
        offsetY: parseInt(offsetYInput.value),
        roundness: parseInt(roundnessInput.value), 
        borderColor: borderColorInput.value,
        borderThickness: parseInt(borderThicknessNumInput.value) || 0,
        logoSize: parseInt(logoSizeNumInput.value) || 100,
        
        // AJOUT : Paramètres de texte
        isTextEnabled: enableTextCheckbox.checked,
        fontFamily: fontFamilySelect.value,
        text: textInput.value,
        textColor: textColorInput.value,
        textSize: parseInt(textSizeNumInput.value) || 50,
        textOffsetX: parseInt(textOffsetXNumInput.value) || 0,
        textOffsetY: parseInt(textOffsetYNumInput.value) || 0,
    };
}

async function updatePreview() {
    // AJOUT : Gère le rechargement de la police si elle change
    // C'est une sécurité pour s'assurer que la police est dispo avant de dessiner
    const selectedFont = `bold 10px "${fontFamilySelect.value}"`; // '10px' est arbitraire
    try {
        await document.fonts.load(selectedFont);
    } catch (err) {
        console.error(`Impossible de charger la police: ${selectedFont}`, err);
    }
    
    const params = getParams();
    drawPattern(previewCtx, previewCanvas.width, previewCanvas.height, params);
}

function handleDownload() {
    const resolution = parseInt(resolutionSelect.value);
    
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = resolution;
    offscreenCanvas.height = resolution;
    const offscreenCtx = offscreenCanvas.getContext('2d');
    
    const params = getParams(); 
    
    drawPattern(offscreenCtx, resolution, resolution, params);
    
    const dataURL = offscreenCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `uv_checker_${resolution}.png`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function syncSliderAndNumber(sliderEl, numberEl) {
    sliderEl.addEventListener('input', () => {
        numberEl.value = sliderEl.value;
    });
    numberEl.addEventListener('input', () => {
        const val = parseInt(numberEl.value);
        const max = parseInt(sliderEl.max);
        const min = parseInt(sliderEl.min);
        if (val >= min && val <= max) {
            sliderEl.value = val;
        } else if (val > max) {
            sliderEl.value = max;
        } else if (val < min) {
            sliderEl.value = min;
        }
    });
}

// --- 4. MISE EN PLACE DES ÉCOUTEURS D'ÉVÉNEMENTS ---

const allInputs = [
    transparentBgCheckbox, 
    backgroundColorInput,
    color1Input, color2Input, tilingInput, tilingNumInput, 
    angleInput, offsetXInput, offsetYInput, 
    logoSizeInput, logoSizeNumInput, 
    roundnessInput, 
    borderColorInput, borderThicknessInput, borderThicknessNumInput,
    
    // AJOUT : Contrôles de texte
    enableTextCheckbox,
    fontFamilySelect,
    textInput, textColorInput, 
    textSizeInput, textSizeNumInput, 
    textOffsetXInput, textOffsetXNumInput, 
    textOffsetYInput, textOffsetYNumInput
];

allInputs.forEach(input => {
    // MODIFIÉ : L'update est maintenant asynchrone
    input.addEventListener('input', updatePreview);
});

// AJOUT : Écouteur pour cacher/montrer les contrôles de texte
enableTextCheckbox.addEventListener('change', () => {
    textControlsWrapper.classList.toggle('hidden', !enableTextCheckbox.checked);
});

transparentBgCheckbox.addEventListener('change', () => {
    bgColorWrapper.classList.toggle('hidden', transparentBgCheckbox.checked);
});

invertBtn.addEventListener('click', () => {
    const c1 = color1Input.value;
    const c2 = color2Input.value;
    color1Input.value = c2;
    color2Input.value = c1;
    updatePreview();
});

logoUploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                globalState.logoImage = img;
                logoSizeInput.disabled = false;
                logoSizeNumInput.disabled = false; 
                updatePreview();
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

downloadBtn.addEventListener('click', handleDownload);

// --- 5. INITIALISATION ---

// MODIFIÉ : L'initialisation est maintenant asynchrone pour charger les polices
async function initializeApp() {
    // Tente de charger la police par défaut au démarrage
    try {
        await document.fonts.load("bold 10px 'Open Sans'");
        console.log('Police "Open Sans" chargée.');
    } catch (err) {
        console.warn('La police "Open Sans" n\'a pas pu être chargée, utilisation du fallback.', err);
    }

    // Lancer les synchronisations
    syncSliderAndNumber(tilingInput, tilingNumInput); 
    syncSliderAndNumber(textSizeInput, textSizeNumInput);
    syncSliderAndNumber(textOffsetXInput, textOffsetXNumInput);
    syncSliderAndNumber(textOffsetYInput, textOffsetYNumInput);
    syncSliderAndNumber(borderThicknessInput, borderThicknessNumInput);
    syncSliderAndNumber(logoSizeInput, logoSizeNumInput); 

    // Définir l'état initial de l'interface
    bgColorWrapper.classList.toggle('hidden', transparentBgCheckbox.checked);
    textControlsWrapper.classList.toggle('hidden', !enableTextCheckbox.checked);

    // Dessiner l'aperçu initial (maintenant que la police est chargée)
    updatePreview();
}

// Lancer l'application
initializeApp();
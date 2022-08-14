'use strict'

let gElCanvas
let gCtx
var gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    document.querySelector('.img-gallery-container').style.display = 'none'
    document.querySelector('.meme-container').style.display = 'flex'
    const meme = getMeme()
    const img = new Image()
    const imgData = getImgById(meme.selectedImgId)
    img.src = imgData.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawLines(gMeme.lines)
    }
}

function drawText(txt, x, y, align, color, size, font) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = `${align}`
    gCtx.lineWidth = 1;
    gCtx.font = `${size}px ${font}`
    gCtx.fillStyle = `${color}`
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, x, y)
    gCtx.closePath()
}

function drawLines(lines) {
    lines.forEach(line => drawText(line.txt, line.pos.x, line.pos.y, line.align, line.color, line.size, line.font))
}

function onSetLineText(text) {
    const elText = document.querySelector('.text-input');
    setLineText(text)
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onAddLine() {
    addLine()
    document.querySelector('.text-input').value = ''
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onRemoveLine() {
    removeLine()
    document.querySelector('.text-input').value = ''
    renderMeme()
}

function onSetTextColor(color) {
    setTextColor(color)
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onIncreaseFontSize() {
    increaseFontSize()
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onDecreaseFontSize() {
    decreaseFontSize()
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onSwitchLine() {
    switchLine()
    updateLineTxtInput()
    renderMeme()
    setTimeout(() => setLineFocus(), 10);
}


function onMoveLineUp() {
    MoveLineUp()
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onMoveLineDown() {
    moveLineDown()
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onSetTextAlign(align) {
    setTextAlign(align)
    renderMeme()
    setTimeout(() => setLineFocus(), 10);

}

function onSetFont(font) {
    setFont(font);
    renderMeme();
    setTimeout(() => setLineFocus(), 10);

}

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}

function updateLineTxtInput() {
    const { txt } = gMeme.lines[gMeme.selectedLineIdx]
    const elInput = document.querySelector('.text-input')
    elInput.value = txt
}

function resizeCanvas() {
    const elCanvasContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elCanvasContainer.offsetWidth
    gElCanvas.height = elCanvasContainer.offsetHeight
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}


function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function drawRect(x, y, width, height) {
    gCtx.beginPath();
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black';
    gCtx.strokeRect(x, y, width, height);
    gCtx.closePath();
}

function setLineFocus() {
    const line = getSelectedLine()
    const { size } = line
    const selectedLineLength = gCtx.measureText(`${line.txt}`)
    const height = size + 10
    let x 
    const y = line.pos.y - size / 2
    if (line.align === 'center') {
        x = line.pos.x - (selectedLineLength.width / 2) - 10
    } else if (line.align === 'left') {
        x = line.pos.x - 10
    } else {
        x = gCanvas.width - selectedLineLength.width - 30
    }
    drawRect(x, y, selectedLineLength.width + 20, height)

}












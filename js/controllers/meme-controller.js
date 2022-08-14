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
        // drawRect(gMeme.lines[gMeme.selectedLineIdx].pos.x, gMeme.lines[gMeme.selectedLineIdx].pos.y, gMeme.lines[gMeme.selectedLineIdx].pos.x+200) 

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
    // const line = { txt, size, align, color, font } pos
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

function drawRect(x, y, height, width) {
    gCtx.beginPath();
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black';
    gCtx.strokeRect(x, y, height, width);
    gCtx.closePath();
}

function setLineFocus() {
    const line = getSelectedLine()
    const { size } = line
    const selectedLineLength = gCtx.measureText(`${line.txt}`)
    const x = line.pos.x - (selectedLineLength.width / 2)
    const y = line.pos.y - size / 2
    const height = size + 10
    drawRect(x, y, selectedLineLength.width, height)



    // const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    // const selectedLineLength = gCtx.measureText(`${selectedLine.txt}`)
    // const selectedLineHeight = gMeme.lines.size
    // drawRect(gCanvas.width / 3, gCanvas.height / 10, selectedLineLength, selectedLineHeight)

}















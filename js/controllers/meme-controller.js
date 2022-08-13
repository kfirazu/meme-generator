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
    // document.querySelector('.meme-container').style.display = 'grid'
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

function drawText(txt, x, y, align, color, size) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = `${align}`
    gCtx.lineWidth = 1;
    gCtx.font = `${size}px impact`
    gCtx.fillStyle = `${color}`
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, x, y)
    gCtx.closePath()
}

function drawLines(lines) {
    lines.forEach(line => drawText(line.txt, line.pos.x, line.pos.y, line.align, line.color, line.size))
}

function onSetLineText(text, event) {
    const elText = document.querySelector('.text-input');
    // elText.addEventListener("keyup", (event) => {
    //     if (event.key === "Enter") {
    //         console.log('Enter key pressed')
    //     }
    // });
    setLineText(text)
    renderMeme()
}

function onAddLine() {
    addLine()
    document.querySelector('.text-input').value = ''
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSetTextColor(color) {
    setTextColor(color)
    renderMeme()
}

function onIncreaseFontSize() {
    increaseFontSize()
    renderMeme()
}

function onDecreaseFontSize() {
    decreaseFontSize()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderInputValue()
    setLineFocus()
    // renderMeme()
}


function onMoveLineUp() {
    MoveLineUp()
    renderMeme()
}

function onMoveLineDown() {
    moveLineDown()
    renderMeme()
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

function onSetTextAlign(align) {
    setTextAlign(align)
    renderMeme()
}

function drawRect(x, y, width, height) {
    gCtx.beginPath();
    gCtx.lineWidth = 5;
    gCtx.strokeStyle = 'black';
    gCtx.strokeRect(x, y, width, height);
    gCtx.closePath();
}

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}

function setLineFocus() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    console.log('selectedLine:', selectedLine)
    const selectedLineLength = gCtx.measureText(`${selectedLine.txt}`)
    const selectedLineHeight = gMeme.lines.size
    drawRect(gCanvas.width / 3, gCanvas.height / 10, selectedLineLength, selectedLineHeight)

}

function resizeCanvas() {
    const elCanvasContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elCanvasContainer.offsetWidth
    gElCanvas.height = elCanvasContainer.offsetHeight
}

















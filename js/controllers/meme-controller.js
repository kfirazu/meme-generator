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


// function onOpenMemeEditor() {
//     const elGallery = document.querySelector('.img-gallery-container ')
//     elGallery.hidden = true
//     const elMemeEditor = document.querySelector('.meme-container')
//     elMemeEditor.hidden = false
// }

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
    setLineFocus()
    renderMeme()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
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

function drawRect(linePos) {
    // let LinePos = 

    gCtx.beginPath();
    gCtx.lineWidth = 4;
    gCtx.strokeStyle = 'green';
    gCtx.strokRect();
    gCtx.closePath();
}

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}

function setLineFocus(){
    let focus = document.querySelector('.text-input').focus
    
}
















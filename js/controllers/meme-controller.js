'use strict'

let gElCanvas
let gCtx

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    const img = new Image()
    const imgData = getImgById(meme.selectedImgId)
    img.src = imgData.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        let { txt, size, align, color } = meme.lines[0]
        drawText(txt, gElCanvas.width / 2, gElCanvas.height / 10, align, color, size)
    }
}


function onOpenMemeEditor() {
    const elGallery = document.querySelector('.gallery')
    elGallery.hidden = true
    const elMemeEditor = document.querySelector('.meme-editor')
    elMemeEditor.hidden = false
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

function onSetLineText(text, event) {
    const elText = document.querySelector('.text-input');
    elText.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            console.log('Enter key pressed')
        }
    });
    setLineText(text)
    renderMeme()
}

function onAddLine() {
    gMeme.lines.push({ txt: 'Add text', size: 20, align: 'center', color: 'white' })
    console.log('txt:', txt)
    renderMeme()
}

function onSetTextColor(){
    setTextColor(color)
    renderMeme()
}

function onIncreaseFontSize(){
    increaseFontSize(size)
    renderMeme
}

function onDecreaseFontSize(){
    decreaseFontSize(size)
    renderMeme()
}













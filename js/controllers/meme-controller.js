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
    const image = new Image()
    image.src = 'img/gallery/1.jpg'
    gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText('Enter text here', gElCanvas.width / 2, gElCanvas.height / 10)

}



function drawText(txt, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = '40px impact';
    gCtx.fillStyle = 'white';
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

function onSetLineText(text){
    setLineText(text)
    renderMeme()
}









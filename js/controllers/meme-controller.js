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
    img.src = `img/gallery/${meme.selectetImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        let { txt, size, align, color } = meme.lines[0]
        drawText(txt, gElCanvas.width / 2, gElCanvas.height / 10, align, color, size)
    }
}



// function drawMeme(imgUrl, textLines) {
//     const meme = getMeme()
//     const image = new Image()
//     image.src = imgUrl
//     gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
//     drawText('Enter text here', gElCanvas.width / 2, gElCanvas.height / 10)


// function drawMeme(imgUrl, textLines) {
//     console.log('imgUrl:', imgUrl)
//     const img = new Image()
//     img.src = `img/gallery/${meme.selectetImgId}.jpg`
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
//         let { txt, size, align, color } = meme.lines[0]
//         drawText(txt, gElCanvas.width / 2, gElCanvas.height / 10, align, color, size)


//     }
// }

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

function onSetLineText(text) {
    setLineText(text)
    renderMeme()
}









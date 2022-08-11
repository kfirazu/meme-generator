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
        // let { txt, size, align, color } = meme.lines[0] // =line
        // drawText(txt, gElCanvas.width / 2, gElCanvas.height / 10, align, color, size)
        drawLines(gMeme.lines)
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

function drawLines(lines) {
    //  let { txt, size, align, color } = meme.lines[0] // =line
    //  drawText(txt, gElCanvas.width / 2, gElCanvas.height / 10, align, color, size)
    lines.forEach(line => drawText(line.txt ,line.pos.x, line.pos.y, line.align, line.color, line.size))
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
    renderMeme()
}

function onSetTextColor() {
    setTextColor()
    renderMeme()
}

function onIncreaseFontSize() {
    increaseFontSize()
    renderMeme
}

function onDecreaseFontSize() {
    decreaseFontSize()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}


function onSetLinePos(lineIdx) {
    console.log('lineIdx:', lineIdx)
    let textLinePos = null
    // if (gMeme.selectedLineIdx === 0) {
    //     textLinePos === 50
    // }
    // else if (gMeme.selectedLineIdx === 1) { textLinePos = gElCanvas.height - 50 }
    // else textLinePos = gElCanvas.height / 2
    // return textLinePos
}













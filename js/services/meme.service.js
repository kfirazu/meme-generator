'use strict'

var gCanvas = {
    width: 500,
    height: 500
}
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        // {
        //     txt: 'Hello',
        //     pos: {x: gCanvas.width / 2 , y: gCanvas.height / 10},
        //     size: 30,
        //     align: 'top',
        //     color: 'white'
        // },
        // {
        //     txt: 'World',
        //     pos: {x: gCanvas.width / 2, y: gCanvas.height -50},
        //     size: 30,
        //     align: 'bottom',
        //     color: 'white'
        // }
    ]
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineText(txt) {
    if(gMeme.lines.length === 0){ 
        addLine()
    }
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}


function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFontSize() {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 100) return
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function decreaseFontSize() {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 10) return
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0

}

function addLine() {
    let line = { txt: 'Add text here', size: 30, align: 'left', color: 'white' }

    if (gMeme.lines.length === 0) {
        line.pos = { x: gCanvas.width / 2, y: gCanvas.height / 10 }
    }
    else if (gMeme.lines.length === 1) {
        line.pos = { x: gCanvas.width / 2, y: gCanvas.height - 50 }
    }
    else line.pos = { x: gCanvas.width / 2, y: gCanvas.height / 2 }


    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}






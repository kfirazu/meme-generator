'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Hello',
            size: 30,
            align: 'top',
            color: 'white'
        },
        {
            txt: 'World',
            size: 30,
            align: 'bottom',
            color: 'white'
        }
    ]
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function getMeme() {
    return gMeme
}

function getImages(){
    return gImgs
}


function setTextColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFontSize(){
    if (gMeme.lines[gMeme.selectedLineIdx].size === 100) return
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function decreaseFontSize(){
    if (gMeme.lines[gMeme.selectedLineIdx].size === 10) return
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
}

function switchLine(){
    gMeme.selectedLineIdx++
    if(gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0

}






'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        // {
        //     txt: 'Hello',
        //     fontSize: 30,
        //     align: 'top',
        //     color: 'white'
        // },
        // {
        //     txt: 'World',
        //     fontSize: 30,
        //     align: 'bottom',
        //     color: 'white'
        // }
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




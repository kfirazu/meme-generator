'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',  //idx 0
        size: 20,
        align: 'left',
        color: 'black'
    },

    {
        txt: 'hello', //idx 1
        size: 20,
        align: 'left',
        color: 'white'

    }
    ]
}



function setLineText(text) {
    gMeme.lines[gMeme.selectedLineIdx] = text
}


function getMeme() {
    return gMeme
}


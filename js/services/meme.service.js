'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics'] },
             { id: 2, url: 'img/2.jpg', keywords: ['dogs', 'animals'] }]
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

function getImgById(imgId) {
    return gImgs.find(img => img.id = imgId)
}
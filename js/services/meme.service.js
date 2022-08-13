'use strict'

var gCanvas = {
    width: 400,
    height: 400
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

var gQuotes = [
    'Enter text here',
    'Hello world',
    'Coding Academy',
    'Fullstack',
    'So many books, so little time',
    'Function "init" is not defined',
    'Sprint 2',
    'Code review',
    'אשמח לעזרה',
    'london calling',
    'boys dont cry',
    'Praise you',
    'What do you want from me',
    'Major Tom- coming home',
    'Good Morning',
]

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineText(txt) {
    if (gMeme.lines.length === 0) {
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
    if (gMeme.selectedLineIdx > gMeme.lines.length) gMeme.selectedLineIdx = 0

}

// function isLineClicked(clickedPos){
//     const meme = getMeme()

// }

function addLine(txt = ' ', size = 30, align = 'center', color = 'white', height = 0) {
    let line = { txt, size, align, color, height }

    if (gMeme.lines.length === 0) {
        line.pos = { x: gCanvas.width / 3, y: gCanvas.height / 10 }
    }
    else if (gMeme.lines.length === 1) {
        line.pos = { x: gCanvas.width / 3, y: gCanvas.height - 50 }
    }
    else line.pos = { x: gCanvas.width / 3, y: gCanvas.height / 2 }


    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function removeLine() {
    let isSure = confirm('Are you sure?')
    if (isSure) {
        gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    }
}

function setTextAlign(align) {
    console.log('align:', align)
    gMeme.lines[gMeme.selectedLineIdx].align = align
    if (align === 'left') {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gCanvas.width / 6
    } else if (align === 'right') {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gCanvas.width - 40

    } else if (align === 'center') {
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gCanvas.width / 2
    }
}

function MoveLineUp() {
    const line = gMeme.lines[gMeme.selectedLineIdx].pos.x
    line.height--
}

function moveLineDown() {
    const line = gMeme.lines[gMeme.selectedLineIdx].pos.y
    line.height--
}

function renderInputValue() {
    let inputText = gMeme.lines[gMeme.selectedLineIdx].txt
    let elInput = document.querySelector('.text-input')
    elInput.value = inputText
}

// function getSelectedLine(selectedLine){
//     const selectedLine = gMeme.selectedLineIdx
// }

function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        <img src="img/icons/facebook-logo.png" alt="facebook" class="facebook-icon">
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);

}


function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}







'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    // document.querySelector('.meme-container').style.display = 'none'
    // document.querySelector('.img-gallery-container').style.display = 'block'
    closeMemeEditor()
    const elGallery = document.querySelector('.img-gallery')
    const imgs = getImages()
    const imgsStr = imgs.map(img => `<img onclick="onImgSelect('${img.id}')" src="${img.url}" >`)
    elGallery.innerHTML = imgsStr.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    // onOpenMemeEditor()
    initCanvas()
    renderMeme()

}

function toggleMenu() {
    document.body.classList.toggle('menu-opened');
}

function closeMemeEditor() {
    document.querySelector('.meme-container').style.display = 'none'
    document.querySelector('.img-gallery-container').style.display = 'block'
    resetGMeme()
}

function renderRandomMeme() {
    let randomImgIdx = getRandomInt(0, gImgs.length - 1)
    console.log('randomImgIdx:', randomImgIdx)
    onImgSelect(`${gImgs[randomImgIdx].id}`)

    let lineAmount = getRandomInt(1, 3)
    for (var i = 1; i <= lineAmount; i++) {
        let randomTxt = getRandomInt(0, gQuetes.length - 1)
        addLine(gQuetes[randomTxt])
    }

}


function resetGMeme() {
    gMeme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: []
    }
    let elText = document.querySelector('.text-input')
    elText.value = ''
}








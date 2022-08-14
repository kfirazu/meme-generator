'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    closeMemeEditor()
    const elGallery = document.querySelector('.img-gallery')
    const imgs = getImgs()
    const strHTMLs = imgs.map(img => `<img onclick="onImgSelect('${img.id}')" src="${img.url}" >`)
    elGallery.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    initCanvas()
}

function toggleMenu() {
    document.body.classList.toggle('menu-opened');
}

function closeMemeEditor() {
    document.querySelector('.meme-container').style.display = 'none'
    document.querySelector('.img-gallery-container').style.display = 'block'
    onResetMeme()
}

function renderRandomMeme() {
    let randomImgIdx = getRandomInt(0, gImgs.length - 1)
    onImgSelect(`${gImgs[randomImgIdx].id}`)

    let lineAmount = getRandomInt(1, 3)
    for (var i = 1; i <= lineAmount; i++) {
        let randomTxt = getRandomInt(0, gQuotes.length - 1)
        addLine(gQuotes[randomTxt])
    }

    let randomColor = getRandomColor()
    setTextColor(randomColor)

}

function onResetMeme() {
   resetMeme()
    let elText = document.querySelector('.text-input')
    elText.value = ''
}









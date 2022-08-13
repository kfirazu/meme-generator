'use strict'

function onInit(){
    renderGallery()
}

function renderGallery() {
    document.querySelector('.meme-container').style.display = 'none'
    document.querySelector('.img-gallery-container').style.display = 'block'
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





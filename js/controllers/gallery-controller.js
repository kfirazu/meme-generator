'use strict'

function onInit(){
    renderGallery()
}

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    const imgs = getImages()
    const imgsStr = imgs.map(img => `<img onclick="onImgSelect('${img.id}')" src="${img.url}" >`)
    elGallery.innerHTML = imgsStr.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    onOpenMemeEditor()
    initCanvas()
    renderMeme()

}





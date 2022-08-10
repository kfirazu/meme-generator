'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    const imgs = getImages()
    const imgsStr = imgs.map(img => `<img src="${img.url} onclick="onImgSelect('${img.id}')" />`)
    elGallery.innerHTML = imgsStr.join('')
}

function onImgSelect() {
    
}

function getImages() {
    return gImgs
}




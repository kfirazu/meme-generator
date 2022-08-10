'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics'] },
             { id: 2, url: 'img/2.jpg', keywords: ['dogs', 'animals'] }]

             
function getImages(){
    return gImgs
}

function getImgById(imgId) {
    return gImgs.find(img => img.id = imgId)
}
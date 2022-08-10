'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = 
[{ id: 1, url: '../img/gallery/1.jpg', keywords: ['funny', 'politics'] },
{ id: 2, url: '../img/gallery/2.jpg', keywords: ['dogs', 'animals'] }]




function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}
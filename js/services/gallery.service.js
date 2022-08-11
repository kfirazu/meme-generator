'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = []
// const gImgs = [
    // { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
    // { id: 2, url: 'img/2.jpg', keywords: ['funny'] },
    // { id: 3, url: 'img/3.jpg', keywords: ['funny'] },
    // { id: 4, url: 'img/4.jpg', keywords: ['funny'] },
    // { id: 5, url: 'img/5.jpg', keywords: ['funny'] },
    // { id: 6, url: 'img/6.jpg', keywords: ['funny'] },
    // { id: 7, url: 'img/7.jpg', keywords: ['funny'] },
    // { id: 8, url: 'img/8.jpg', keywords: ['funny'] },
    // { id: 9, url: 'img/9.jpg', keywords: ['funny'] },
    // { id: 10, url: 'img/10.jpg', keywords: ['funny'] },
    // { id: 11, url: 'img/11.jpg', keywords: ['funny'] },
    // { id: 12, url: 'img/12.jpg', keywords: ['funny'] },
    // { id: 13, url: 'img/13.jpg', keywords: ['funny'] },
    // { id: 14, url: 'img/14.jpg', keywords: ['funny'] },
    // { id: 15, url: 'img/15.jpg', keywords: ['funny'] },
    // { id: 16, url: 'img/16.jpg', keywords: ['funny'] },
    // { id: 17, url: 'img/17.jpg', keywords: ['funny'] },
    // { id: 18, url: 'img/18.jpg', keywords: ['funny'] },
// ]

_createImgs()


function _createImgs() {
    gImgs.push(_createImg('img/1.jpg', ['funny', 'politics']))
    gImgs.push(_createImg('img/2.jpg', ['funny', 'dogs']))
    gImgs.push(_createImg('img/3.jpg', ['baby', 'dogs']))
    gImgs.push(_createImg('img/4.jpg', ['funny', 'cats']))
    gImgs.push(_createImg('img/5.jpg', ['baby']))
    gImgs.push(_createImg('img/6.jpg', ['funny', 'politics']))
    gImgs.push(_createImg('img/7.jpg', ['funny', 'baby']))
    gImgs.push(_createImg('img/8.jpg', ['funny']))
    gImgs.push(_createImg('img/9.jpg', ['funny', 'baby']))
    gImgs.push(_createImg('img/10.jpg', ['funny', 'baby']))
    gImgs.push(_createImg('img/11.jpg', ['funny', 'sport']))
    gImgs.push(_createImg('img/12.jpg', ['funny', 'celebrities']))
    gImgs.push(_createImg('img/13.jpg', ['actors', 'celebrities']))
    gImgs.push(_createImg('img/14.jpg', ['actors', 'celebrities']))
    gImgs.push(_createImg('img/15.jpg', ['funny']))
    gImgs.push(_createImg('img/16.jpg', ['funny']))
    gImgs.push(_createImg('img/17.jpg', ['funny', 'politics']))
    gImgs.push(_createImg('img/18.jpg', ['movies']))

}


function _createImg(url, keyWords) {
    return {
        id: makeId(),
        url,
        keyWords
    }
}

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}




'use strict'

var gKeywordSearchCountMap = { 'funny': 13, 'animals': 2, 'baby': 5, 'celebrities': 3, 'politics': 3 }
var gImgs = []

_createImgs()


function _createImgs() {
    gImgs.push(_createImg('img/1.jpg', ['funny', 'politics']))
    gImgs.push(_createImg('img/2.jpg', ['funny', 'animals']))
    gImgs.push(_createImg('img/3.jpg', ['baby', 'dogs']))
    gImgs.push(_createImg('img/4.jpg', ['funny', 'animals']))
    gImgs.push(_createImg('img/5.jpg', ['baby']))
    gImgs.push(_createImg('img/6.jpg', ['funny', 'politics']))
    gImgs.push(_createImg('img/7.jpg', ['funny', 'baby']))
    gImgs.push(_createImg('img/8.jpg', ['funny']))
    gImgs.push(_createImg('img/9.jpg', ['funny', 'baby']))
    gImgs.push(_createImg('img/10.jpg', ['funny', 'baby']))
    gImgs.push(_createImg('img/11.jpg', ['funny', 'sport']))
    gImgs.push(_createImg('img/12.jpg', ['funny', 'celebrities']))
    gImgs.push(_createImg('img/13.jpg', ['movies', 'celebrities']))
    gImgs.push(_createImg('img/14.jpg', ['movies', 'celebrities']))
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





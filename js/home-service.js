'use strict'
gFilterBy
var gImages = [ 
    {id:1, url:'img/meme-imgs/1.jpg', keywords: ['trump', 'politics'] },
    {id:2, url:'img/meme-imgs/2.jpg', keywords: ['animal', 'dog'] },
    {id:3, url:'img/meme-imgs/3.jpg', keywords: ['animal', 'baby', 'dog'] },
    {id:4, url:'img/meme-imgs/4.jpg', keywords: ['animal', 'cat'] },
    {id:5, url:'img/meme-imgs/5.jpg', keywords: ['none'] },
    {id:6, url:'img/meme-imgs/6.jpg', keywords: ['none'] },
    {id:7, url:'img/meme-imgs/7.jpg', keywords: ['none'] },
    {id:8, url:'img/meme-imgs/8.jpg', keywords: ['none'] },
    {id:9, url:'img/meme-imgs/9.jpg', keywords: ['none'] },
    {id:10, url:'img/meme-imgs/10.jpg', keywords: ['none'] }
]
var gFilterBy

function getImg(elImg) {
    var img = gImages.find(img => img.url === elImg.dataset.url)
    return img
}


function filterImg() {
    if (!gFilterBy) return 
    var filterImgs = gImages.filter( img => img.keywords.includes(gFilterBy))
    return filterImgs
}


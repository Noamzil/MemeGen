'use strict'
gFilterBy
var gImages = [ 
    {id:1, url:'./img/meme-imgs/1.jpg', keywords: ['simpsons', 'funny' ] },
    {id:2, url:'./img/meme-imgs/2.jpg', keywords: ['funny'] },
    {id:3, url:'./img/meme-imgs/3.jpg', keywords: ['comics'] },
    {id:4, url:'./img/meme-imgs/4.png', keywords: ['none'] },
    {id:5, url:'./img/meme-imgs/5.jpg', keywords: ['white template'] },
    {id:6, url:'./img/meme-imgs/6.jpg', keywords: ['the office','white template'] },
    {id:7, url:'./img/meme-imgs/7.jpg', keywords: ['white template', 'spongebob'] },
    {id:8, url:'./img/meme-imgs/8.png', keywords: ['white template','winnie the pooh', 'animal'] },
    {id:9, url:'./img/meme-imgs/9.jpg', keywords: ['white template', 'animal', 'dog'] },
    {id:10, url:'./img/meme-imgs/10.jpg', keywords: ['white template', 'the office'] },
    {id:11, url:'./img/meme-imgs/11.jpg', keywords: ['whitetemplate'] },
    {id:12, url:'./img/meme-imgs/12.jpg', keywords: ['comics'] },
    {id:13, url:'./img/meme-imgs/13.jpg', keywords: ['trump', 'politics', 'funny'] },
    {id:13, url:'./img/meme-imgs/14.jpg', keywords: ['none'] },
    {id:13, url:'./img/meme-imgs/15.jpg', keywords: ['tou story'] },
    {id:13, url:'./img/meme-imgs/16.jpg', keywords: ['none'] },
    {id:13, url:'./img/meme-imgs/17.jpg', keywords: ['white template'] },
    {id:13, url:'./img/meme-imgs/18.jpg', keywords: ['none'] },
    {id:13, url:'./img/meme-imgs/19.jpg', keywords: ['none'] },
    {id:13, url:'./img/meme-imgs/20.jpg', keywords: ['none'] },
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


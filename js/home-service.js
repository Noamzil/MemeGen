'use strict'

var gFilterBy
var gImg
var gImages = [
    { id: 1, url: './img/meme-imgs/1.jpg', keywords: ['Simpsons', 'Tv Show'] },
    { id: 2, url: './img/meme-imgs/2.jpg', keywords: ['Funny', 'Comics'] },
    { id: 3, url: './img/meme-imgs/3.jpg', keywords: ['Comics'] },
    { id: 4, url: './img/meme-imgs/4.png', keywords: ['Comics'] },
    { id: 5, url: './img/meme-imgs/5.jpg', keywords: ['White Template'] },
    { id: 6, url: './img/meme-imgs/6.jpg', keywords: ['The Office', 'White Template', 'Tv Show'] },
    { id: 7, url: './img/meme-imgs/7.jpg', keywords: ['White Template', 'Spongebob', 'Tv Show'] },
    { id: 8, url: './img/meme-imgs/8.png', keywords: ['White Template', 'winnie the pooh', 'Animal'] },
    { id: 9, url: './img/meme-imgs/9.jpg', keywords: ['White Template', 'Animal', 'Dog'] },
    { id: 10, url: './img/meme-imgs/10.jpg', keywords: ['White Template', 'The Office'] },
    { id: 11, url: './img/meme-imgs/11.jpg', keywords: ['White Template', 'Comics'] },
    { id: 12, url: './img/meme-imgs/12.jpg', keywords: ['Comics', 'White Template'] },
    { id: 13, url: './img/meme-imgs/13.jpg', keywords: ['Trump', 'politics', 'Funny'] },
    { id: 14, url: './img/meme-imgs/14.jpg', keywords: ['Toy Story', 'Comics'] },
    { id: 15, url: './img/meme-imgs/15.jpg', keywords: ['Tv Show'] },
    { id: 16, url: './img/meme-imgs/16.jpg', keywords: ['White Template'] },
    { id: 17, url: './img/meme-imgs/17.jpg', keywords: ['Face'] },
    { id: 18, url: './img/meme-imgs/18.jpg', keywords: ['Face'] },
    { id: 19, url: './img/meme-imgs/19.jpg', keywords: ['Face'] },
    { id: 20, url: './img/meme-imgs/20.jpg', keywords: ['Face'] },
    { id: 21, url: './img/meme-imgs/21.jpg', keywords: ['White Template', 'Comics'] },
    { id: 22, url: './img/meme-imgs/22.jpg', keywords: ['White Template'] },
    { id: 23, url: './img/meme-imgs/23.jpg', keywords: ['White Template'] },
    { id: 24, url: './img/meme-imgs/24.jpg', keywords: ['Animal', 'Cat'] },
    { id: 25, url: './img/meme-imgs/25.jpg', keywords: ['Animal', 'Cat'] },
    { id: 26, url: './img/meme-imgs/26.jpg', keywords: ['anime', 'Comics'] },
    { id: 27, url: './img/meme-imgs/27.jpg', keywords: ['Animal', 'Dog'] },
    { id: 28, url: './img/meme-imgs/28.jpg', keywords: ['The Office', 'Tv Show'] },
    { id: 29, url: './img/meme-imgs/29.jpg', keywords: ['The Office', 'Tv Show'] },
    { id: 30, url: './img/meme-imgs/30.jpg', keywords: ['White Template', 'Comics'] },
    { id: 31, url: './img/meme-imgs/31.jpg', keywords: ['White Template', 'Spongebob', 'Tv Show'] }
]

var gFilterKeywords = [
    { keyword: 'Animal', frequency: 0 },
    { keyword: 'The Office', frequency: 0 },
    { keyword: 'White Template', frequency: 0 },
    { keyword: 'Tv Show', frequency: 0 },
    { keyword: 'Simpsons', frequency: 0 },
    { keyword: 'Cat', frequency: 0 },
    { keyword: 'Dog', frequency: 0 },
    { keyword: 'Spongebob', frequency: 0 },
    { keyword: 'Comics', frequency: 0 },
    { keyword: 'Trump', frequency: 0 },
    { keyword: 'Toy Story', frequency: 0 },
    { keyword: 'Face', frequency: 0 },
]


function getImg(elImg) {
    var img = gImages.find(img => img.url === elImg.dataset.url)
    return img
}


function filterImg() {
    if (!gFilterBy) return
    var filterImgs = gImages.filter(img => img.keywords.includes(gFilterBy))
    return filterImgs
}


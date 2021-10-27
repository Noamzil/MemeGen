'use strict'
renderGallery()
var gImg

function renderGallery() {
    const elGallery = document.querySelector('.gallery-container')
    var strHtml = ''
    gImages.forEach(function (img) {
        strHtml += `<img src="${img.url}" data-url="${img.url}" onclick="clickedImg(this)">`
    })
    elGallery.innerHTML = strHtml
}
function clickedImg(elImg) {
    var img = gImages.find(img => img.url === elImg.dataset.url)
    gMeme = { selectedImgId: img.id, lines: [] }
    console.log(gMeme);
    drawImg(elImg)
    onGoToEditPage()
    gImg = img
    console.log(gImg);

}

function onGoToEditPage(img) {
    const elHomePage = document.querySelector('.home-page').hidden = true
    const elEditPage = document.querySelector('.edit-page').hidden = false
    // console.log(img.dataset.url)
}
function onGoToHomePage() {
    const elHomePage = document.querySelector('.home-page').hidden = false
    const elEditPage = document.querySelector('.edit-page').hidden = true
}

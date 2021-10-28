'use strict'
renderGallery(gImages)
var gImg

function renderGallery(images) {
    const elGallery = document.querySelector('.gallery-container')
    var strHtml = ''
    images.forEach(function (img) {
        strHtml += `<img src="${img.url}" data-url="${img.url}" class="gallery-img" onclick="onClickedImg(this)">`
    })
    elGallery.innerHTML = strHtml
}
function onClickedImg(elImg) {
    var img = getImg(elImg)
    gMeme = { selectedImgId: img.id, lines: [] }
    drawImg(elImg)
    onGoToEditPage()
    gImg = img
}

function onGoToEditPage(img) {
    const elHomePage = document.querySelector('.home-page').hidden = true
    const elEditPage = document.querySelector('.edit-page').hidden = false
    const elSavedPage = document.querySelector('.saved-memes-page').hidden = true
}

function onGoToHomePage() {
    const elHomePage = document.querySelector('.home-page').hidden = false
    const elEditPage = document.querySelector('.edit-page').hidden = true
    const elSavedPage = document.querySelector('.saved-memes-page').hidden = true
}


function onFilterImg(filter) {
    gFilterBy = filter
    console.log(gFilterBy);
    renderGallery(filterImg())
}

function toggleMenu() {
    console.log('im here');
    var elMenu =  document.querySelector('.keywords-container')
    console.log(elMenu);
    elMenu.style.right = 0
}

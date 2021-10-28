'use strict'
var gSavedmemes = loadFromStorage('memes')

function savedMemes() {
    const elSavedPage = document.querySelector('.saved-memes-page').hidden = false
    if (!gSavedmemes) return
    renderSavedGallery(gSavedmemes)
    document.querySelector('.home-page').hidden = true
    document.querySelector('.edit-page').hidden = true

}

function renderSavedGallery(images) {
    const elSavedGallery = document.querySelector('.saved-memes-gallery')
    var strHtml = ''
    images.forEach(function (img) {
        strHtml += `<img src="${img.url}" data-url="${img.url}" onclick="clickedSavedImg(this)">`
    })
    elSavedGallery.innerHTML = strHtml
}

function clickedSavedImg(elImg) { //Still have some Bugs
    var img = gSavedmemes.find(img => img.url === elImg.dataset.url)
    drawImg(elImg)
    img.lines.forEach(line => onDrawLine(line))
    onGoToEditPage()
    gImg = img
}
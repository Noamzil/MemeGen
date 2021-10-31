'use strict'
onRenderGallery(gImages)

function onRenderGallery(images) {
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


function onFilterImg(filter,word) {
    if (!filter) onRenderGallery(gImages)
    var currKeyWord = gFilterKeywords.find(keywordObj => keywordObj.keyword === filter)
    currKeyWord.frequency++
    console.log(currKeyWord)
    gFilterBy = filter
    onRenderGallery(filterImg())
}


function openMenu() {
    var elMenu = document.querySelector('.keywords-filter-container')
    elMenu.style.right = 0
}

function closeMenu() {
    var elMenu = document.querySelector('.keywords-filter-container')
    elMenu.style.right = -300 + 'px'

}

function renderKeyWords() {
    var elKeyWords = document.querySelector('.keywords')
    var strHtml = ''
    gFilterKeywords.forEach(keywordObj => strHtml += `<li class="keyword" onclick="onFilterImg(this.innerText,this)">${keywordObj.keyword}</li>`)
    elKeyWords.innerHTML = strHtml
}

renderKeyWords()
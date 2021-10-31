'use strict'
var gMeme = { lines: 1 }
var gLineIdx
var gMemesStorage = loadFromStorage('memes')
var gMemes = (!gMemesStorage) ? [] : gMemesStorage
var gLineNumber = 2

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos
var gIsDrag



function getLineIdx(idx) {
    gLineIdx = idx
    markLine()
}

function getCurrLine() {
    var currLine = gMeme.lines[gLineIdx]
    return currLine
}

function markLine() {
    var elInput = document.querySelector(`.line-${gLineIdx}`)
    gMeme.lines.forEach(() => { })
    for (var i = 0; i < gLineNumber; i++) {
        var currLine = document.querySelector(`.line-${i}`).classList.remove('mark-line')
    }
    elInput.classList.add('mark-line')
}

function moveLine(directon) {
    var currLine = getCurrLine()
    var path = (directon === 'down') ? 10 : -10
    gMeme.lines[gLineIdx].y = currLine.y + path
}

function alignText(directon) {
    if (!gMeme.lines.length) return
    var x = (directon === 'left') ? 40 : (directon === 'right') ? 300 : 180
    gMeme.lines[gLineIdx].x = x
}

function increaseDecreaseTextSize(size) {
    var currLine = getCurrLine()
    var size = (size === 'bigger') ? 5 : -5
    currLine.size += size
}

function changeTextColor(color) {
    var currLine = getCurrLine()
    currLine.color = color
}

function changeStrokeColor(color) {
    var currLine = getCurrLine()
    currLine.storkeColor = color
}
function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-jpg.jpg'
}

// function _saveMemeToStorage() {
//     if (!gMemesStorage) gMemes.push(gMeme);
//     else {
//         gMemes = gMemesStorage
//         var memeIdx = gMemes.findIndex(meme => meme.selectedImgId === gMeme.selectedImgId)
//         if (memeIdx === -1) gMemes.push(gMeme);
//         else {
//             gMemes[memeIdx] = gMeme
//         }
//     }
//     saveToStorage('memes', gMemes)
// }

function changeFont(currLine, font){
    currLine.font = font
}



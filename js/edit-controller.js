'use strict'

var gElCanvas = document.getElementById('my-canvas');
var gCtx = gElCanvas.getContext('2d');


function drawImg(elImg) {
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}
function drawImgFromSrc(imgSource) {
  var img = new Image();
  img.src = imgSource
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}
function drawText(text, x, y, size = 50, color = 'white', storkeColor = 'black') {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = storkeColor;
  gCtx.fillStyle = color;
  gCtx.font = `${size}px Impact`;
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}
function drawTextFromInput(text, y, lineIdx) {
  if (!gMeme.lines[lineIdx]) {
    drawImgFromSrc(gImg.url)
    gMeme.lines[lineIdx] = { text: text, x: 80, y: y, size: 50, color: 'white', storkeColor: 'black' }
    gMeme['selectedLineIdx'] = lineIdx
    gMeme['url'] = gImg.url
    onDrawTheOtherLines()
    drawText(text, 80, y)
  }
  else {
    var currLine = gMeme.lines[gIdx]
    drawImgFromSrc(gImg.url)
    onDrawTheOtherLines()
    var size = gMeme.lines[lineIdx].size
    gMeme.lines[lineIdx].text = text
    onDrawLine(currLine)
  }
}
function onMoveLine(directon) {
  if (!gMeme.lines.length) return
  moveLine(directon)
  drawImgFromSrc(gImg.url)
  onDrawTheOtherLines()
  onDrawLine(getCurrLine())
}
function onAlignText(directon) {
  if (!gMeme.lines.length) return
  alignText(directon)
  drawImgFromSrc(gImg.url)
  onDrawTheOtherLines()
  onDrawLine(getCurrLine())
}

function onIncreaseDecreaseTextSize(size) {
  if (!gMeme.lines.length) return
  increaseDecreaseTextSize(size)
  drawImgFromSrc(gImg.url)
  onDrawTheOtherLines()
  onDrawLine(getCurrLine())
}

function onChangeTextColor(color) {
  changeTextColor(color)
  drawImgFromSrc(gImg.url)
  onDrawLine(getCurrLine())
  onDrawTheOtherLines()
}

function onChangeStrokeColor(color) {
  changeStrokeColor(color)
  drawImgFromSrc(gImg.url)
  onDrawLine(getCurrLine())
  onDrawTheOtherLines()
}

function onDrawTheOtherLines() { 
  gMeme.lines.forEach(function (line) { if (line !== gMeme.lines[gIdx]) onDrawLine(line); })
}
function onDrawLine(line) {
  drawText(line.text, line.x, line.y, line.size, line.color, line.storkeColor)
}



// function renderCanvas() {
  
//   drawImage2(gImg.url)

// }
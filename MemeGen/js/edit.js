'use strict'

var gElCanvas = document.getElementById('my-canvas');
var gCtx = gElCanvas.getContext('2d');
var gMeme = { lines: 1 }
var gIdx


function getLineIdx(idx) {  //service
  gIdx = idx
}
function drawImg(elImg) {
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}
function drawImg2(imgSource) {
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
    drawImg2(gImg.url)
    gMeme.lines[lineIdx] = { text: text, x: 80, y: y, size: 50, color: 'white', storkeColor: 'black' }
    gMeme['selectedLineIdx'] = lineIdx
    drawTheOtherLines()
    drawText(text, 80, y)
  }
  else {
    var currLine = gMeme.lines[gIdx]
    drawImg2(gImg.url)
    drawTheOtherLines()
    var size = gMeme.lines[lineIdx].size
    gMeme.lines[lineIdx].text = text
    drawLine(currLine)
  }
}

function moveLine(directon) {
  if (!gMeme.lines.length) return
  drawImg2(gImg.url)
  var currLine = gMeme.lines[gIdx]
  drawTheOtherLines()
  var path = (directon === 'down') ? 10 : -10
  gMeme.lines[gIdx].y = currLine.y + path
  drawLine(currLine)
}

function alignText(directon) {
  if (!gMeme.lines.length) return
  drawImg2(gImg.url)
  var currLine = gMeme.lines[gIdx]
  drawTheOtherLines()
  var x = (directon === 'left') ? 40 : (directon === 'right') ? 300 : 180
  gMeme.lines[gIdx].x = x
  drawLine(currLine)
}

function increaseDecreaseTextSize(size) {
  if (!gMeme.lines.length) return
  var currLine = gMeme.lines[gIdx]
  var size = (size === 'bigger') ? 5 : -5
  currLine.size += size
  drawImg2(gImg.url)
  drawTheOtherLines()
  drawLine(currLine)

}

function changeTextColor(color) {
  var currLine = gMeme.lines[gIdx]
  currLine.color = color
  drawImg2(gImg.url)
  drawLine(currLine)
  drawTheOtherLines()
}

function changeStrokeColor(color) {
  var currLine = gMeme.lines[gIdx]
  currLine.storkeColor = color
  drawImg2(gImg.url)
  drawLine(currLine)
  drawTheOtherLines()
}


function drawTheOtherLines() {
  gMeme.lines.forEach(function (line) { if (line !== gMeme.lines[gIdx]) drawLine(line); })
}

function drawLine(line) {
  drawText(line.text, line.x, line.y, line.size, line.color, line.storkeColor)
}
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
function drawText(text, x, y, size = 50, color = 'white', storkeColor = 'black', font = 'Impact') {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = storkeColor;
  gCtx.fillStyle = color;
  gCtx.font = `${size}px ${font}`;
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}

function drawTextFromInput(text, y, lineIdx) {
  markLine()
  if (!gMeme.lines[lineIdx]) {
    drawImgFromSrc(gImg.url)
    gMeme.lines[lineIdx] = { text: text, x: 80, y: y, size: 50, color: 'white', storkeColor: 'black', font: 'Impact' }
    gMeme['selectedLineIdx'] = lineIdx
    gMeme['url'] = gImg.url
    onDrawTheOtherLines()
    drawText(text, 80, y)
  }
  else {
    var currLine = gMeme.lines[gLineIdx]
    drawImgFromSrc(gImg.url)
    onDrawTheOtherLines()
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
  gMeme.lines.forEach(function (line) { if (line !== gMeme.lines[gLineIdx]) onDrawLine(line); })
}

function onDrawLine(line) {
  drawText(line.text, line.x, line.y, line.size, line.color, line.storkeColor, line.font)
}



function onChangeFont(font) {
  var currLine = getCurrLine()
  changeFont(currLine, font)
  drawImgFromSrc(gImg.url)
  onDrawLine(currLine)
  onDrawTheOtherLines()

}




// DRAG AND DROP  - NEEDS SOME ORDER BETWEEN SERVICE AND CONTROLLER
function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY
  }
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
  }
  return pos
}
function isTextClicked(clickedPos) {
  if (!gMeme.lines.length) return false
  var x = gMeme.lines[gLineIdx].x
  var y = gMeme.lines[gLineIdx].y
  var textLen = gMeme.lines[gLineIdx].text.length
  var textSize = gMeme.lines[gLineIdx].size
  const distance = textLen * textSize / 2
  return clickedPos.x >= x && clickedPos.x <= x + distance && clickedPos.y >= y - textSize && clickedPos.y <= y
}


function onDown(ev) {
  const pos = getEvPos(ev)
  if (!isTextClicked(pos)) return
  setTextDrag(true)
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}
function setTextDrag(isDrag) {
  gIsDrag = isDrag
}
function onMove(ev) {
  if (gIsDrag) {
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    gStartPos = pos
    moveText(dx, dy)
    renderCanvas()
  }
}
function moveText(dx, dy) {
  gMeme.lines[gLineIdx].x += dx
  gMeme.lines[gLineIdx].y += dy
}
function renderCanvas() {
  drawImgFromSrc(gImg.url)
  var line = gMeme.lines[gLineIdx]
  onDrawTheOtherLines()
  onDrawLine(line)
}
function onUp() {
  setTextDrag(false)
  document.body.style.cursor = 'grab'
}



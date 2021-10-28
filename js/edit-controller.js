'use strict'

var gElCanvas = document.getElementById('my-canvas');
var gCtx = gElCanvas.getContext('2d');
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos
var gIsDrag
addListeners()


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
  markLine()
  if (!gMeme.lines[lineIdx]) {
    drawImgFromSrc(gImg.url)
    gMeme.lines[lineIdx] = { text: text, x: 80, y: y, size: 50, color: 'white', storkeColor: 'black' }
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
  drawText(line.text, line.x, line.y, line.size, line.color, line.storkeColor)
}

function resizeCanvas() {
  var elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
  drawImgFromSrc(gImg.url)
}

function addListeners() {
  addMouseListeners()
  addTouchListeners()
  // window.addEventListener('resize', () => {
  //     resizeCanvas()
  //     renderCanvas()
  // })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}


function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}


// DRAG AND DROP  - NEEDS SOME ORDER BETWEEN SERVICE AND CONTROLLER
function getEvPos(ev) { 
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY
  }
  if (gTouchEvs.includes(ev.type)) {
    // ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
  }
  return pos
}
function isTextClicked(clickedPos) {
  if (!gMeme.lines.length) return
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


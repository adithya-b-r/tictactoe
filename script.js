var table = document.getElementById("myTable")
var restart = document.getElementById("restart")

var letters = ['X', 'O']
var prev = 'X'
var cont = true
var clicked = 0
boxes = ['b1','b2','b3','b4','b5','b6','b7','b8','b9']
document.getElementById('restart').style.display = 'none'

function win() {
  if (prev == 'X') {
    document.getElementById("info").innerHTML = "Player O wins!"
  }
  else {
    document.getElementById("info").innerHTML = "Player X wins!"
  }
  document.getElementById('restart').style.display = 'block'
  globalThis.cont = false
  globalThis.clicked = 0
}

function check() {
  if (b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) {
    if (b1.innerHTML != '' && b2.innerHTML != '' && b3.innerHTML != '')
      win()
  }
  if (b4.innerHTML == b5.innerHTML && b5.innerHTML == b6.innerHTML) {
    if (b4.innerHTML != '' && b5.innerHTML != '' && b6.innerHTML != '')
      win()
  }
  if (b7.innerHTML == b8.innerHTML && b8.innerHTML == b9.innerHTML) {
    if (b7.innerHTML != '' && b8.innerHTML != '' && b9.innerHTML != '')
      win()
  }
  if (b1.innerHTML == b4.innerHTML && b4.innerHTML == b7.innerHTML) {
    if (b1.innerHTML != '' && b4.innerHTML != '' && b7.innerHTML != '')
      win()
  }
  if (b2.innerHTML == b5.innerHTML && b5.innerHTML == b8.innerHTML) {
    if (b2.innerHTML != '' && b5.innerHTML != '' && b8.innerHTML != '')
      win()
  }
  if (b3.innerHTML == b6.innerHTML && b6.innerHTML == b9.innerHTML) {
    if (b3.innerHTML != '' && b6.innerHTML != '' && b9.innerHTML != '')
      win()
  }
  if (b1.innerHTML == b5.innerHTML && b5.innerHTML == b9.innerHTML) {
    if (b1.innerHTML != '' && b5.innerHTML != '' && b9.innerHTML != '')
      win()
  }
  if (b7.innerHTML == b5.innerHTML && b5.innerHTML == b3.innerHTML) {
    if (b7.innerHTML != '' && b5.innerHTML != '' && b3.innerHTML != '')
      win()
  }
}

table.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "TD") {
    var cell = e.target
    if (cont === true && cell.innerHTML == '') {
      if (prev == 'X') {
        cell.innerHTML = letters[0]
        prev = 'O'
        document.getElementById("info").innerHTML = "Player One[" + prev + "] : Your Turn"
      }
      else if(prev == 'O') {
        cell.innerHTML = letters[1]
        prev = 'X'
        document.getElementById("info").innerHTML = "Player Two[" + prev + "] : Your Turn"
      }

      if(clicked == 8){
        globalThis.clicked = 0
        document.getElementById('restart').style.display = 'block'
      }
      globalThis.clicked = clicked + 1

      console.log(clicked)
      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      // b1.innerHTML = '4'
      // console.log(cont)
      check()
      computer()
    }
  }
})

restart.addEventListener("click", function (e) {
  globalThis.cont = true
  document.getElementById('restart').style.display = 'none'
  b1.innerHTML = ''
  b2.innerHTML = ''
  b3.innerHTML = ''
  b4.innerHTML = ''
  b5.innerHTML = ''
  b6.innerHTML = ''
  b7.innerHTML = ''
  b8.innerHTML = ''
  b9.innerHTML = ''

  document.getElementById("info").innerHTML = "Player Two[" + prev + "] : Your Turn"
})

function computer(){
  
  const sel = Math.floor(Math.random() * boxes.length+1)
  boxes.length = boxes.length -1
  del = boxes.splice(sel, 1)
  console.log(del, boxes)
}

// Random function
// const months = ["January", "February", "March", "April", "May", "June", "July"]
// const random = Math.floor(Math.random() * months.length)
// console.log(random, months[random])

// Delete by index
// numbers.splice(index, 1)
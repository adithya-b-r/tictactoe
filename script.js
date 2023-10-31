var table = document.getElementById("myTable")
var restart = document.getElementById("restart")
var inside = document.getElementById("inside")
var page1 = document.getElementById("page1")
var start = document.getElementById("start")

inside.style.display = 'none'
// page1.style.display = 'none'

var letters = ['X', 'O']
var p1
var p2
var prev = 'O'
var cont = true
var clicked = 0
boxes = ['b1','b2','b3','b4','b5','b6','b7','b8','b9']
document.getElementById('restart').style.display = 'none'

function win() {
  if (prev == 'X') {
    document.getElementById("info").innerHTML = p1+" [O] wins!"
  }
  else {
    document.getElementById("info").innerHTML = p2+" [X] wins!"
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

start.addEventListener("click", function(e){
  var p1 = document.getElementById('p1').value
  var p2 = document.getElementById('p2').value

  if(p1 == '' || p2 == '' || p1 == ' ' || p2 == ' '){
    alert("Please enter valid player name!")
  }
  else{
    globalThis.p1 = p1
    globalThis.p2 = p2
    inside.style.display = 'flex'
    page1.style.display = 'none'
    document.getElementById("info").innerHTML = p1+" [" + prev + "] : Your Turn"
  }
})

table.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "TD") {
    var cell = e.target
    if (cont === true && cell.innerHTML == '') {
      if (prev == 'X') {
        cell.innerHTML = letters[0]
        prev = 'O'
        document.getElementById("info").innerHTML = p1+" [" + prev + "] : Your Turn"
      }
      else if(prev == 'O') {
        cell.innerHTML = letters[1]
        prev = 'X'
        document.getElementById("info").innerHTML = p2+" [" + prev + "] : Your Turn"
      }

      if(clicked == 8){
        globalThis.clicked = 0
        document.getElementById('restart').style.display = 'block'
      }
      globalThis.clicked = clicked + 1
      check()
    }
  }
})

restart.addEventListener("click", function (e) {
  globalThis.cont = true
  document.getElementById('restart').style.display = 'none'
  
  const tdElem = document.querySelectorAll('td')

  //Clears all the boxes.
  tdElem.forEach(function(td){
    td.innerHTML = '';
  })

  if (prev == 'O') {
    document.getElementById("info").innerHTML = p1+" [" + prev + "] : Your Turn"
  }
  else if(prev == 'X') {
    document.getElementById("info").innerHTML = p2+" [" + prev + "] : Your Turn"
  }
})

// function computer(){
//   const sel = Math.floor(Math.random() * boxes.length+1)
//   boxes.length = boxes.length -1
//   del = boxes.splice(sel, 1)
//   console.log(del, boxes)
// }

// Random function
// const months = ["January", "February", "March", "April", "May", "June", "July"]
// const random = Math.floor(Math.random() * months.length)
// console.log(random, months[random])

// Delete by index
// numbers.splice(index, 1)
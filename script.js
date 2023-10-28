var table = document.getElementById("myTable");
var restart = document.getElementById("restart");

var letters = ['X', 'O'];
var prev = 'X';
var cont = true;

function win() {
  if (prev == 'X') {
    document.getElementById("info").innerHTML = "Player O wins!";
  }
  else {
    document.getElementById("info").innerHTML = "Player X wins!";
  }

  globalThis.cont = false;
}

function check() {
  if (b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML) {
    if (b1.innerHTML != '' && b2.innerHTML != '' && b3.innerHTML != '')
      win();
  }
  if (b4.innerHTML == b5.innerHTML && b5.innerHTML == b6.innerHTML) {
    if (b4.innerHTML != '' && b5.innerHTML != '' && b6.innerHTML != '')
      win();
  }
  if (b7.innerHTML == b8.innerHTML && b8.innerHTML == b9.innerHTML) {
    if (b7.innerHTML != '' && b8.innerHTML != '' && b9.innerHTML != '')
      win();
  }
  if (b1.innerHTML == b4.innerHTML && b4.innerHTML == b7.innerHTML) {
    if (b1.innerHTML != '' && b4.innerHTML != '' && b7.innerHTML != '')
      win();
  }
  if (b2.innerHTML == b5.innerHTML && b5.innerHTML == b8.innerHTML) {
    if (b2.innerHTML != '' && b5.innerHTML != '' && b8.innerHTML != '')
      win();
  }
  if (b3.innerHTML == b6.innerHTML && b6.innerHTML == b9.innerHTML) {
    if (b3.innerHTML != '' && b6.innerHTML != '' && b9.innerHTML != '')
      win();
  }
  if (b1.innerHTML == b5.innerHTML && b5.innerHTML == b9.innerHTML) {
    if (b1.innerHTML != '' && b5.innerHTML != '' && b9.innerHTML != '')
      win();
  }
  if (b7.innerHTML == b5.innerHTML && b5.innerHTML == b3.innerHTML) {
    if (b7.innerHTML != '' && b5.innerHTML != '' && b3.innerHTML != '')
      win();
  }
}

table.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "TD") {
    if (cont === true) {
      var cell = e.target;
      if (prev == 'X' && cell.innerHTML == '') {
        cell.innerHTML = letters[0];
        prev = 'O';
        document.getElementById("info").innerHTML = "Player One[" + prev + "] : Your Turn";
      }
      else if(prev == 'O' && cell.innerHTML == '') {
        cell.innerHTML = letters[1];
        prev = 'X';
        document.getElementById("info").innerHTML = "Player Two[" + prev + "] : Your Turn";
      }

      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      // b1.innerHTML = '4'
      console.log(cont);
      check();
    }
  }
});

restart.addEventListener("click", function (e) {
  globalThis.cont = true;

  b1.innerHTML = '';
  b2.innerHTML = '';
  b3.innerHTML = '';
  b4.innerHTML = '';
  b5.innerHTML = '';
  b6.innerHTML = '';
  b7.innerHTML = '';
  b8.innerHTML = '';
  b9.innerHTML = '';

  document.getElementById("info").innerHTML = "Player Two[" + prev + "] : Your Turn";
});
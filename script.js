var table = document.getElementById("myTable");
var restart = document.getElementById("restart");
var inside = document.getElementById("inside");
var page1 = document.getElementById("page1");
var start = document.getElementById("start");

inside.style.display = 'none';

var letters = ['X', 'O'];
var p1;
var p2;
var prev = 'X'; // Player starts with 'X'
var cont = true;
var clicked = 0;
var board = ['', '', '', '', '', '', '', '', ''];
document.getElementById('restart').style.display = 'none';

function win() {
  if (prev == 'X') {
    document.getElementById("info").innerHTML = p1 + " [O] wins!";
  } else {
    document.getElementById("info").innerHTML = p2 + " [X] wins!";
  }
  document.getElementById('restart').style.display = 'block';
  globalThis.cont = false;
  globalThis.clicked = 0;
  if (prev == 'X' && p2 == 'A.I') {
    setTimeout(startNewRound, 2000); // Start new round after 2 seconds if AI wins
  }
}

function check() {
  let winner = checkWinner();
  if (winner !== null) {
    if (winner == 'tie') {
      document.getElementById("info").innerHTML = "It's a tie!";
      document.getElementById('restart').style.display = 'block';
    } else {
      if (winner == 'X') {
        document.getElementById("info").innerHTML = p1 + " [X] wins!";
      } else {
        document.getElementById("info").innerHTML = p2 + " [O] wins!";
        if (p2 == 'A.I') {
          setTimeout(startNewRound, 5000); // Start new round after 2 seconds if AI wins
        }
      }
    }
    document.getElementById('restart').style.display = 'block';
    globalThis.cont = false;
    globalThis.clicked = 0;
  }
}

function checkWinner() {
  let winner = null;
  let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (board[a] && board[a] == board[b] && board[a] == board[c]) {
      winner = board[a];
    }
  }

  if (winner == null && !board.includes('')) {
    return 'tie';
  } else {
    return winner;
  }
}

start.addEventListener("click", function (e) {
  var p1 = document.getElementById('p1').value;
  var p2 = document.getElementById('p2').value;

  if (p1 == '' || p2 == '' || p1 == ' ' || p2 == ' ') {
    alert("Please enter valid player name!");
  } else {
    globalThis.p1 = p1;
    globalThis.p2 = p2;
    inside.style.display = 'flex';
    page1.style.display = 'none';
    document.getElementById("info").innerHTML = p1 + " [" + prev + "] : Your Turn";
  }
});

table.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "TD") {
    var cell = e.target;
    var cellIndex = Array.from(cell.parentNode.children).indexOf(cell) +
      Array.from(cell.parentNode.parentNode.children).indexOf(cell.parentNode) * 3;

    if (cont === true && board[cellIndex] == '') {
      if (prev == 'X') {
        cell.innerHTML = letters[0];
        board[cellIndex] = 'X';
        prev = 'O';
        document.getElementById("info").innerHTML = p2 + " [" + prev + "] : Your Turn";
      } else if (prev == 'O') {
        cell.innerHTML = letters[1];
        board[cellIndex] = 'O';
        prev = 'X';
        document.getElementById("info").innerHTML = p1 + " [" + prev + "] : Your Turn";
      }

      clicked++;
      check();

      if (cont === true && prev == 'O' && p2 == 'A.I') {
        setTimeout(bestMove, 500); // AI makes a move after a brief pause
      }
    }
  }
});

function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < board.length; i++) {
    if (board[i] == '') {
      board[i] = 'O';
      let score = minimax(board, 0, false);
      board[i] = '';
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  board[move] = 'O';
  document.getElementById('b' + (move + 1)).innerHTML = 'O';
  prev = 'X';
  document.getElementById("info").innerHTML = p1 + " [" + prev + "] : Your Turn";
  check();
}

function minimax(board, depth, isMaximizing) {
  let scores = {
    'X': -1,
    'O': 1,
    'tie': 0
  };

  let result = checkWinner();
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] == '') {
        board[i] = 'O';
        let score = minimax(board, depth + 1, false);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] == '') {
        board[i] = 'X';
        let score = minimax(board, depth + 1, true);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

function startNewRound() {
  globalThis.cont = true;
  document.getElementById('restart').style.display = 'none';

  const tdElem = document.querySelectorAll('td');

  // Clears all the boxes and board array.
  tdElem.forEach(function (td) {
    td.innerHTML = '';
  });
  board = ['', '', '', '', '', '', '', '', ''];

  prev = 'X'; // Ensure player starts with 'X'
  document.getElementById("info").innerHTML = p1 + " [" + prev + "] : Your Turn";
}

restart.addEventListener("click", function (e) {
  startNewRound();
});

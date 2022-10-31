let p = null;
let gameChoice = ['Rock', 'Paper', 'Scissors'];

function computerChoice() {
  return Math.floor(Math.random() * 3);
}

function shoot(p) {
  let player = p;
  let comp = computerChoice();
  if (player === null) {
    results.innerHTML = '';
  } else if (player - comp === 0) {
    return "It's a draw!  You both chose " + gameChoice[player] + '.';
  } else if (player - comp === 1 || player - comp === -2) {
    return (
      'Congratulations, you won!' +
      ' ' +
      gameChoice[player] +
      ' beats' +
      ' ' +
      gameChoice[comp] +
      '!'
    );
  } else if (player - comp === 2 || player - comp === -1) {
    return (
      'Sorry, the computer won! ' +
      gameChoice[player] +
      ' beats ' +
      ' ' +
      gameChoice[comp] +
      '!'
    );
  } else {
    return '';
  }
}

function pressRock() {
  let results = document.querySelector('.results');
  results.innerHTML = shoot(0);
}
document.getElementById('0').onclick = pressRock;

function pressPaper() {
  let results = document.querySelector('.results');
  results.innerHTML = shoot(1);
}
document.getElementById('1').onclick = pressPaper;

function pressScissors() {
  let results = document.querySelector('.results');
  results.innerHTML = shoot(2);
}
document.getElementById('2').onclick = pressScissors;

let startTheGame, userNumber, randomNumber;
let attempts = 3;
let multiplier = 1;
let prizeMultiplier = 1;
let prize;
let totalPrize = 0;
const CONSTANTS = {
  PRIZES:{
    HIGH:10,
    MEDIUM:5,
    LOW:2
  },
  POSSIBLE_PRIZE:{
    '3':10,
    '2':5,
    '1':2.5
  },
  ATTEMPTS:{
    FIRST:3,
    SECOND:2,
    THIRD:1
  },
  MULTIPLIER_STEP:{
    FOR_RANGE:2,
    FOR_PRIZES:3
  },
  MAX_RANGE:5,
  START_MULTIPLIER:1,
  ZERO:0
}
function beginTheGame() {
  startTheGame = confirm('Do you want to play a game?');
  if ( startTheGame ) {
    playTheGame();
  } else {
    alert('You did not become a millionaire, but can.');
  }
}
function playTheGame() {
  randomNumber = Math.round(Math.random() * CONSTANTS.MAX_RANGE * multiplier);
  for( attempts; attempts > 0; attempts--) {
    userNumber = prompt(`Enter the number from 0 to ${CONSTANTS.MAX_RANGE * multiplier}
    \nAttempts left: ${attempts}
    \nTotal prize: ${totalPrize}$
    \nPossible prize on current attempt: ${Math.floor( CONSTANTS.POSSIBLE_PRIZE[attempts] * prizeMultiplier )}$`, '0');
    if ( userNumber === null ) { 
      attempts = CONSTANTS.ZERO;
      alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
      return;
    }
    winnerNumber();
  }
}
function playAgain() {
  attempts = CONSTANTS.ZERO;
  alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
  totalPrize = CONSTANTS.ZERO;
  startTheGame = confirm('Do you want to play again?');
  if ( startTheGame ) {
    attempts = CONSTANTS.ATTEMPTS.FIRST;
    prize = CONSTANTS.ZERO;
    multiplier = CONSTANTS.START_MULTIPLIER;
    prizeMultiplier = CONSTANTS.START_MULTIPLIER;
    playTheGame();
  } else {
    alert('You did not become a millionaire, but can.');
  }
}
function continueGame() {
  attempts = CONSTANTS.ZERO;
  totalPrize += prize;
  startTheGame = confirm(`Congratulation! Your prize is: ${totalPrize}$. Do you want to continue?`);
  if ( startTheGame ) {
    multiplier *= CONSTANTS.MULTIPLIER_STEP.FOR_RANGE;
    prizeMultiplier *= CONSTANTS.MULTIPLIER_STEP.FOR_PRIZES;
    attempts = CONSTANTS.ATTEMPTS.FIRST;
    playTheGame();
  } else {
    playAgain();
  }
}
function winnerNumber() {
  if ( +userNumber === randomNumber ) {
    if ( attempts === CONSTANTS.ATTEMPTS.FIRST ) {
      prize = CONSTANTS.PRIZES.HIGH * prizeMultiplier;
      continueGame();
    } else if ( attempts === CONSTANTS.ATTEMPTS.SECOND ) {
      prize = CONSTANTS.PRIZES.MEDIUM * prizeMultiplier;
      continueGame();
    } else if ( attempts === CONSTANTS.ATTEMPTS.THIRD ){
      prize = CONSTANTS.PRIZES.LOW * prizeMultiplier;
      continueGame();
    }
  } else if ( attempts === CONSTANTS.ATTEMPTS.THIRD ) {
    playAgain();
  }
}
beginTheGame();

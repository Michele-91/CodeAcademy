const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' ||
    userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`${userInput} is not a valid input`);
  }
}

//console.log(getUserChoice('rock'));
//console.log(getUserChoice('river'));

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0: return 'rock'; break;
    case 1: return 'paper'; break;
    case 2: return 'scissors'; break;
    default: return 'invalid'; break;
  }
}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  //secret cheat word
  if(userChoice === 'bomb') {
    return 'You destroyed your opponent. Congrats!'
  }
  if(userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'You won!';
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return "The computer won!";
    } else {
      return 'You won!';
    }
  }
}

//console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();



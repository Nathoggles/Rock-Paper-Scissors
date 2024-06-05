console.log('Testy!');
let humanScore = 0;
let computerScore = 0;
//function getComputerChoice()
function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  console.log(getComputerChoice());

let UserInput = prompt('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock')
console.log(UserInput);

  //function getHumanChoice(){}
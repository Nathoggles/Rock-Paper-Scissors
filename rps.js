let humanScore = 0;
let computerScore = 0;
  //Rock is 1, Paper is 2, Scissors is 3. Which means (if excluding draws from the start), result 3 = Paper won over Rock, 
  //result 4 = Rock won over Scissors, result 5 = Scissors won over Rock.  

 
  function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }



function getHumanChoice(){
  let HumanChoice 
  HumanChoice = prompt('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock').toLowerCase();
  if (HumanChoice === 'rock') {
    HumanChoice = 1;
    return HumanChoice;
  } else if (HumanChoice === 'paper') {
    HumanChoice = 2;
    return HumanChoice;
  } else if (HumanChoice === 'scissors') {
    HumanChoice = 3;
    return HumanChoice;
  }
  alert('Wrong Input! You have to type in either Rock, Paper or Scissors!')
  return HumanChoice;
}
//console.log(getHumanChoice());

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let roundResult = humanSelection + computerSelection;

console.log(humanSelection);
console.log(computerSelection);
console.log(roundResult);

  //Rock is 1, Paper is 2, Scissors is 3. Which means (if excluding draws from the start), 
  //result 3 = Paper won over Rock, result 4 = Rock won over Scissors, result 5 = Scissors won over Rock.  

function playRound () {
  if (humanSelection === computerSelection) {
    alert('Draw! Next round');
  } else if (roundResult === 3 && humanSelection === 2) {
    alert('You won the round! You chose Paper, your opponent chose Rock.');
    humanScore++;
    }
  else {
    alert('We\'re not finished here!')  
    }
  }
  console.log(playRound());
  console.log(humanScore);

//TEMPLATES AND WIP CODE//
/*So the main idea is to describe results as attributres and then do something like if result = 5 && player1input = 1 alert(win) else lost and give counter to comp/human.*/


 /*
function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  console.log(getComputerChoice(1, 4));
*/

/*function getHumanChoiceAsVariable(){
  let humanChoiceVariable;
  prompt(('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock').toLowerCase()) = humanChoiceVariable;*/
/*if (getHumanChoice() === 'rock') {
  humanChoiceVariable = 1;
  return humanChoiceVariable;
} else if (getHumanChoice() === 'paper') {
    humanChoiceVariable = 2;
    return humanChoiceVariable;
} else if (getHumanChoice() === 'scissors') {
    humanChoiceVariable = 3;
    return humanChoiceVariable;
} else {humanChoiceVariable = 0;
  alert('Wrong input. You have to type in either Rock, Paper or Scissors!');
  return humanChoiceVariable;
}
}
console.log(getHumanChoiceAsVariable())*/


/*function getHumanChoiceAsVariable(){
    let humanChoiceVariable;
  if (getHumanChoice() === 'rock') {
    humanChoiceVariable = 1;
    return humanChoiceVariable;
  } else if (getHumanChoice() === 'paper') {
      humanChoiceVariable = 2;
      return humanChoiceVariable;
  } else if (getHumanChoice() === 'scissors') {
      humanChoiceVariable = 3;
      return humanChoiceVariable;
  } else {humanChoiceVariable = 0;
    alert('Wrong input. You have to type in either Rock, Paper or Scissors!');
    return humanChoiceVariable;
  }
}
console.log(getHumanChoiceAsVariable());*/

/* 

/*function getHumanChoiceAsVariable(){
    let humanChoiceVariable;
  if (getHumanChoice() === 'rock') {
    humanChoiceVariable = 1;
    return humanChoiceVariable;
  } else if (getHumanChoice() === 'paper') {
      humanChoiceVariable = 2;
      return humanChoiceVariable;
  } else if (getHumanChoice() === 'scissors') {
      humanChoiceVariable = 3;
      return humanChoiceVariable;
  } else {humanChoiceVariable = 0;
    alert('Wrong input. You have to type in either Rock, Paper or Scissors!');
    return humanChoiceVariable;
  }
}
console.log(getHumanChoiceAsVariable());*/
/*
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));*/


  /*let humanChoiceVariable;
  function getHumanChoice(humanChoice) {
    if (humanChoice === 'rock') {
      console.log(humanChoice);
       return humanChoiceVariable = 1}
  }*/
  //let humanChoice = prompt('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock');

  //let humanChoiceVariable;
  //let humanChoice;
  /*const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  person.fullName();
  console.log(person.fullName());
  
  let humanChoiceVariable = {
    getHumanChoice: function() {
      return prompt('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock');
    }
  }
  console.log(humanChoiceVariable.getHumanChoice());*/



  /*9function getHumanChoice() {
    humanChoice = prompt('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock');
    if (humanChoice.toLowerCase() === 'rock') {
      humanChoiceVariable = 1;}
    else if (humanChoice.toLowerCase() === 'paper') {
      humanChoiceVariable = 2;}
    else if (humanChoice.toLowerCase() === 'scissors') {
        humanChoiceVariable = 3;}
    else {alert('Wrong input. Type in your choice of Rock, Paper or Scissors!');
          //return humanChoice;
  }*/

  
 
  /*let humanChoiceVariable;
  if (humanChoice.toLowerCase() === 'rock') {
    humanChoiceVariable = 1;}
  else if (humanChoice.toLowerCase() === 'paper') {
    humanChoiceVariable = 2;}
  else if (humanChoice.toLowerCase() === 'scissors') {
      humanChoiceVariable = 3;}
  else {alert('Wrong input. Type in your choice of Rock, Paper or Scissors!');
        //return humanChoice;
      }*/
  

      //const humanSelection = getHumanChoice();
      //const computerSelection = getComputerChoice();
/*function letsPlay {
  getComputerChoice(1, 4);
  getHumanChoice;
}*/


  //console.log(humanChoiceVariable);

  //let humanChoice = if getHumanChoice.toLowerCase === 

/*function getHumanChoice() {
return prompt('Let\'s play Rock-Paper-Scissors! What do you pick? Type in your choice!', 'Rock');
}
console.log(getHumanChoice);*/


//let humanChoice = 

/*function playRound (humanChoice, computerChoice){
  if (getHumanChoice = 'rock' && getComputerChoice = 1){
  alert('Draw!');}
  else if (getHumanChoice = 'rock' && getComputerChoice = 2){
  alert('Paper beats rock. You lost the round!')}
  else if (getHumanChoice = 'rock' && getComputerChoice = 3){
  alert('Rock beats scissors. You won the round!')
  }
  else {alert('Wrong input! Type in "Rock", "Paper" or "Scissors" to play the game.')}
}*/

  //function getHumanChoice(){}
  
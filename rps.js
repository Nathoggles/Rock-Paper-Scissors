let humanScore = 0;
let computerScore = 0;
let i = 0;
  /*const pRock = document.querySelector("#rock");
  const pPaper = document.querySelector("#paper");
  const pScissors = document.querySelector("#scissors");
  */
  const click = document.querySelectorAll(".gamebuttons");




  //Rock is 1, Paper is 2, Scissors is 3.   

 
  function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

//Rock is 1, Paper is 2, Scissors is 3. Which means (if excluding draws from the start), 
  //result 3 = Paper won over Rock, result 4 = Rock won over Scissors, result 5 = Scissors won over Rock.  

 let humanSelection;
function getHumanChoice(){
   click.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id)
        if (button.id === 'paper') {
          humanSelection = 2;
          console.log(humanSelection);
        } else if (button.id === 'scissors') {
          humanSelection = 3;
          console.log(humanSelection);
         } else if (button.id === 'rock') {
          humanSelection = 1;
          console.log(humanSelection);
          }
     let computerSelection = getComputerChoice();
     let roundResult = humanSelection + computerSelection;
     if (humanSelection === computerSelection) {
      alert(`Draw! You both chose ${button.id}. ${4 - i} rounds to go.`);
    } else if (roundResult === 3 && humanSelection === 2) {
      alert(`You won the round! You chose Paper, your opponent chose Rock. ${4 - i} rounds to go.`);
      humanScore++;
    } else if (roundResult === 4 && humanSelection === 1) {
      alert(`You won the round! You chose Rock, your opponent chose Scissors. ${4 - i} rounds to go.`);
      humanScore++;
    } else if (roundResult === 5 && humanSelection === 3) {
      alert(`You won the round! You chose Scissors, your opponent chose Rock. ${4 - i} rounds to go.`);
      humanScore++;
    } else if (typeof humanSelection === 'string') {
      return
    } else {
    alert(`Sadly, you lost the round. Your opponent chose ${button.id}. Cheer up!' ${4 - i} rounds to go.`);
    computerScore++; 
    }
    });
  });
  
};

getHumanChoice();

/*click.forEach((button) => {
  button.addEventListener("click", () => {
      //playGame();
      alert("Let's play!");
  });
});*/
//console.log(getHumanChoice());





 

  
 


  //any button = play game.

 


 
  
 /* click.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
  });*/

  /*btna.addEventListener("click", () => {
    alert("Hello World, I'm the cleanest button");
  })*/

/*click.addEventListener("click", () => {
  alert(click.id);
});*/

/*

let humanSelection = getHumanChoice();







  function playGame(){
    for (let i = 0; i <= 4; i++) {
      playRound();




  function playRound () {




  let computerSelection = getComputerChoice();
  let roundResult = humanSelection + computerSelection;

    //console.log(humanSelection);
    //console.log(computerSelection);
    //console.log(roundResult);
    let ComputerChoiceString;
    if (computerSelection === 1) {
      computerChoiceString = 'Rock';
    } else if (computerSelection === 2) {
      computerChoiceString = 'Paper';
    } else if (computerSelection === 3) {
      computerChoiceString = 'Scissors';
    };
  if (humanSelection === computerSelection){
    //alert("Ha!");
  } else {
    //alert("Not Ha!");
  };

 
    //console.log(computerChoiceString); 
      if (humanSelection === computerSelection) {
        alert(`Draw! You both chose ${computerChoiceString}. ${4 - i} rounds to go.`);
      } else if (roundResult === 3 && humanSelection === 2) {
        alert(`You won the round! You chose Paper, your opponent chose Rock. ${4 - i} rounds to go.`);
        humanScore++;
      } else if (roundResult === 4 && humanSelection === 1) {
        alert(`You won the round! You chose Rock, your opponent chose Scissors. ${4 - i} rounds to go.`);
        humanScore++;
      } else if (roundResult === 5 && humanSelection === 3) {
        alert(`You won the round! You chose Scissors, your opponent chose Rock. ${4 - i} rounds to go.`);
        humanScore++;
      } else if (typeof humanSelection === 'string') {
        return
      } else {
      alert(`Sadly, you lost the round. Your opponent chose ${computerChoiceString}. Cheer up!' ${4 - i} rounds to go.`);
      computerScore++; 
      }
      console.log(humanScore);
      console.log(computerScore);

      
    }

    
    //console.log(playRound());
  }
  if (computerScore < humanScore) {
    alert(`You won ${humanScore} : ${computerScore}! Reload the page for another game or close it to exit.`)
  } else if (computerScore > humanScore) {
    alert(`You lost ${humanScore} : ${computerScore} :( But you can always reload the page for another game! Close the page to exit.`)
  } else if (computerScore = humanScore) {
    alert(`That's a draw, ${humanScore} : ${computerScore}! But you can always reload the page for another game! Close the page to exit.`)
  }

  }
  


//playGame();


*/

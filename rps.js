
  /*const pRock = document.querySelector("#rock");
  const pPaper = document.querySelector("#paper");
  const pScissors = document.querySelector("#scissors");
  */
  const click = document.querySelectorAll(".gamebuttons");
  const text = document.querySelector("#text");
  const pc = document.querySelector("#pc");
  const comp = document.querySelector("#comp");
  const roundCount = document.querySelector("#roundCount");
  
  const images = document.querySelector("#images");
  const logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    logo.setAttribute("width", "250px");
    logo.setAttribute("heigth", "auto");
    logo.setAttribute("src", "rps_logo.jpeg");
    logo.setAttribute("alt", "A panda and a hare play 'Rock, Paper, Scissors'");
  //console.log(logo);
  images.appendChild(logo);
  
  /*
  const rockImg = document.createElement("img");
    rockImg.setAttribute("id", "rockImg");
    rockImg.setAttribute("width", "150px");
    rockImg.setAttribute("heigth", "auto");
    rockImg.setAttribute("src", "rock_s.jpeg");
    rockImg.setAttribute("alt", "Rock'");

  const paperImg = document.createElement("img");
    paperImg.setAttribute("id", "paperImg");
    paperImg.setAttribute("width", "150px");
    paperImg.setAttribute("heigth", "auto");
    paperImg.setAttribute("src", "paper_s.jpeg");
    paperImg.setAttribute("alt", "Paper");

  const scissorsImg = document.createElement("img");
    scissorsImg.setAttribute("id", "scissorsImg");
    scissorsImg.setAttribute("src", "scissors_s.jpeg");
    scissorsImg.setAttribute("alt", "Scissors");

  */
   
    let humanImg = document.createElement("img");
    humanImg.setAttribute("class", "humanImg");
    humanImg.setAttribute("width", "150px");
    humanImg.setAttribute("heigth", "auto");


    let computerImg = document.createElement("img");
    computerImg.setAttribute("class", "computerImg");
    computerImg.setAttribute("width", "150px");
    computerImg.setAttribute("heigth", "auto");

   function setImgAttributes(actor, choice) {
      actor.setAttribute("id", choice + "Img");
      actor.setAttribute("src", choice + "_s.jpeg");
      actor.setAttribute("alt", choice);
    }

 

// console.log(rockImg);
 //console.log(scissorsImg);

//const humanImgSpan = document.createElement("span");
//const computerImgSpan = document.createElement("span");

  //console.log(text)

  //parentNode.removeChild(child) 
  //parentNode.appendChild(childNode)



  //Rock is 1, Paper is 2, Scissors is 3.   

 
  function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

//Rock is 1, Paper is 2, Scissors is 3. Which means (if excluding draws from the start), 
  //result 3 = Paper won over Rock, result 4 = Rock won over Scissors, result 5 = Scissors won over Rock.  


  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};  

let numberOfGames = 0;

function firstPlay(){
  if (numberOfGames === 0){
  return playGame();
};
};

  function playGame(){
    let i = 0;
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    //let humanImg;
    //let computerImg;

    click.forEach((button) => button.addEventListener("click", function() {
      removeAllChildNodes(images);  
      images.appendChild(humanImg);  
      images.appendChild(computerImg); 
      }, {once : true}));

   click.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        setImgAttributes(humanImg, button.id);
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
     let computerString;
//Rock is 1, Paper is 2, Scissors is 3.  
          if (computerSelection === 1) {
            setImgAttributes(computerImg, "rock");
            computerString = "rock";
          }
          if (computerSelection === 2) {
            setImgAttributes(computerImg, "paper");
            computerString = "paper";
          }
          if (computerSelection === 3) {
            setImgAttributes(computerImg, "scissors");
            computerString = "scissors";
          }
//update images here
     i++;
     if (humanSelection === computerSelection) {
      text.textContent = `Draw! You both chose ${button.id}.`;
      humanScore++;
      computerScore++;
      pc.textContent = humanScore;
      comp.textContent = computerScore;
      roundCount.textContent = i;
        if (i === 5) {return result();}
    } else if (roundResult === 3 && humanSelection === 2) {
      text.textContent = `You won the round! You chose Paper, your opponent chose Rock.`;
      humanScore++;
      pc.textContent = humanScore;
      comp.textContent = computerScore;
      roundCount.textContent = i;
      if (i === 5) {return result();}
    } else if (roundResult === 4 && humanSelection === 1) {
      text.textContent = `You won the round! You chose Rock, your opponent chose Scissors.`;
      humanScore++;
      pc.textContent = humanScore;
      comp.textContent = computerScore;
      roundCount.textContent = i;
      if (i === 5) {return result();}
    } else if (roundResult === 5 && humanSelection === 3) {
      text.textContent = `You won the round! You chose Scissors, your opponent chose Rock.`;
      humanScore++;
      pc.textContent = humanScore;
      comp.textContent = computerScore;
      roundCount.textContent = i;
      if (i === 5) {return result();} 
    }  else {
    text.textContent = `Sadly, you lost the round. You chose ${button.id}, your opponent chose ${computerString}. Cheer up!'`;
    computerScore++; 
     pc.textContent = humanScore;
     comp.textContent = computerScore;
     roundCount.textContent = i;
    if (i === 5) {return result();}
    }
    });
  });

  function result() {
    if (computerScore < humanScore) {
      text.textContent = `You won ${humanScore} : ${computerScore}! Another game? Close the page to exit.`;
      i = 0;
      humanScore = 0;
      computerScore = 0;
      return numberOfGames++;

    } else if (computerScore > humanScore) {
      text.textContent = `You lost ${humanScore} : ${computerScore} :( Another game? Close the page to exit. `;
      i = 0;
      humanScore = 0;
      computerScore = 0;
      return numberOfGames++;

    } else if (computerScore = humanScore) {
      text.textContent = `That's a draw, ${humanScore} : ${computerScore}! Another game? Close the page to exit.`;
      i = 0;
      humanScore = 0;
      computerScore = 0;
      return numberOfGames++;

    }
  };

};




firstPlay();

/*click.forEach((button) => {
  button.addEventListener("click", () => {
      //playGame();
      alert("Let's play!");
  });
});*/
//console.log(getHumanChoice());





 

  
 


  //any button = play game.

 



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


let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return `It's a draw, try again!`;
    } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return `You Lose, ${computerSelection} beats ${playerSelection}`;
    }  else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return `You Lose, ${computerSelection} beats ${playerSelection}`;
    } else {
        computerScore++;
        return `You Lose, ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for(let i=1;i<=5;i++){
        let userChoice = prompt("Choose rock, paper or scissors");
        if (!['rock', 'paper', 'scissors'].includes(userChoice) || (userChoice === null) || (userChoice === undefined)){
            alert("Enter a valid choice!");
            return;
        }
        let result = playRound(userChoice.toLowerCase(), getComputerChoice());
        console.log(result);
    }

    if(playerScore === computerScore){
        console.log("It's a draw!");
    } else if(playerScore > computerScore){
        console.log(`You won ${playerScore} : ${computerScore}`);
    } else {
        console.log(`You Lost ${playerScore} : ${computerScore}`);
    }
}

game();

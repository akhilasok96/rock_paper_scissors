
let playerScore = 0;
let computerScore = 0;
let userChoice;
let gameOver = false;
let playerWin = false;
let computerWin = false;

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        game(e.target.name);
    })
})

const result_status = document.querySelector('.status');
const result_status_content = document.createElement('h2');
result_status_content.classList.toggle('result-status');

const final_result = document.querySelector('.final-result');
const final_result_content = document.createElement('h2');

const scores = document.querySelector('.scores');
const scores_content = document.createElement('h2');

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

function gameReset(){
    if (result_status.contains(result_status_content)) {
        result_status.removeChild(result_status_content);
    }
    
    if (scores.contains(scores_content)) {
        scores.removeChild(scores_content);
    }

    if (final_result.contains(final_result_content)) {
        final_result.removeChild(final_result_content);
    } 
}

function finalResult(){
    if(playerWin === true && gameOver === true){
        final_result_content.textContent = "Congragulations, You won the game !!!";
        final_result_content.classList.add('won');
        final_result_content.classList.remove('lost'); // R
        final_result.appendChild(final_result_content);
    } else if(computerWin === true){
        final_result_content.textContent = "Sorry, You lost the game :(";
        final_result_content.classList.add('lost');
        final_result_content.classList.remove('won'); // R
        final_result.appendChild(final_result_content);
    }
    scoreReset();
    playerWin = false;
    computerWin = false;
    gameOver = false;
}

function scoreReset(){
    playerScore = 0;
    computerScore = 0;
}

function game(userChoice){
    let result = playRound(userChoice, getComputerChoice());
    result_status_content.textContent = result;
    result_status.appendChild(result_status_content);
    scores_content.textContent = `${playerScore} : ${computerScore}`
    scores.appendChild(scores_content);

    if(playerScore === 5){
        playerWin = true;
        gameOver = true;
        finalResult();
    } else if(computerScore === 5){
        computerWin = true;
        gameOver = true;
        finalResult();
    }

    const reset = document.querySelector('.reset-btn');
    reset.addEventListener('click', gameReset);
}


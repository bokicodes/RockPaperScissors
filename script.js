const rockPic = document.querySelector(".rockPic");
const paperPic = document.querySelector(".paperPic");
const scissorsPic = document.querySelector(".scissorsPic");

const playerSel = document.querySelector(".playerSel");
const computerSel = document.querySelector(".computerSel");
const result = document.querySelector(".result");


function getComputerChoice(){
    let number = Math.round(Math.random() * (3.49 - 0.51) + 0.51);
    switch(number){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3: 
            return "Scissors"
    }
}

let playRound = (playerSelection, computerSelection, playerScore, computerScore) => {

    //Player and Computer both select the same weapon
    if(playerSelection === computerSelection){
        result.innerHTML = "DRAW!"
        return;
    }
    
    //Player selects rock
    if(playerSelection === "rock"){
        if(computerSelection === "paper") {
            computerScore++;
            playerSel.innerHTML = "You: "+ playerScore;
            computerSel.innerHTML = "Computer: " + computerScore;
            result.innerHTML = "PAPER BEATS ROCK, COMPUTER WON THIS ROUND!"
            return;
        }
        else if(computerSelection === "scissors") {
            playerScore++;
            playerSel.innerHTML = "You: "+ playerScore;
            computerSel.innerHTML = "Computer: " + computerScore;
            result.innerHTML = "ROCK BEATS SCISSORS, YOU WON THIS ROUND!"
            return;
        }
    }

    //Player selects paper
    if(playerSelection === "paper"){
        if(computerSelection === "scissors") {
            computerScore++;
            playerSel.innerHTML = "You: "+ playerScore;
            computerSel.innerHTML = "Computer: " + computerScore;
            result.innerHTML = "SCISSORS BEATS PAPER, COMPUTER WON THIS ROUND!"
            return;
        }
        else if(computerSelection === "rock") {
            playerScore++;
            playerSel.innerHTML = "You: "+ playerScore;
            computerSel.innerHTML = "Computer: " + computerScore;
            result.innerHTML = "PAPER BEATS ROCK, YOU WON THIS ROUND!"
            return;
        }
    }

    //Player selects scissors
    if(playerSelection === "scissors"){
        if(computerSelection === "rock") {
            computerScore++;
            playerSel.innerHTML = "You: "+ playerScore;
            computerSel.innerHTML = "Computer: " + computerScore;
            result.innerHTML = "ROCK BEATS SCISSORS, COMPUTER WON THIS ROUND!"
            return;
        }
        else if(computerSelection === "paper") {
            playerScore++;
            playerSel.innerHTML = "You: "+ playerScore;
            computerSel.innerHTML = "Computer: " + computerScore;
            result.innerHTML = "SCISSORS BEATS PAPER, YOU WON THIS ROUND"
            return;
        }
    }
};

// let playerScore = Number(playerSel.innerHTML.split(" ")[1]);
// let computerScore = Number(computerSel.innerHTML.split(" ")[1]);
// if(playerScore === 5 || computerScore === 5){
//     console.log("game over");
// }

rockPic.addEventListener("click", () => {
    let playerScore = Number(playerSel.innerHTML.split(" ")[1]);
    let computerScore = Number(computerSel.innerHTML.split(" ")[1]);
    playRound("rock", getComputerChoice().toLowerCase(), playerScore, computerScore);
});

paperPic.addEventListener("click", () => {
    let playerScore = Number(playerSel.innerHTML.split(" ")[1]);
    let computerScore = Number(computerSel.innerHTML.split(" ")[1]);
    playRound("paper", getComputerChoice().toLowerCase(), playerScore, computerScore);
});

scissorsPic.addEventListener("click", () => {
    let playerScore = Number(playerSel.innerHTML.split(" ")[1]);
    let computerScore = Number(computerSel.innerHTML.split(" ")[1]);
    playRound("scissors", getComputerChoice().toLowerCase(), playerScore, computerScore);
});
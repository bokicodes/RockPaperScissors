

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

let playRound = (playerSelection, computerSelection) => {

    console.log("Player selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1));
    console.log("Computer selection: " + computerSelection.charAt(0).toUpperCase() + computerSelection.substr(1));

    //Player and Computer both select the same weapon
    if(playerSelection === computerSelection){
        return "No winner!";
    }
    
    //Player selects rock
    if(playerSelection === "rock"){
        if(computerSelection === "paper") return "Computer wins!";
        else if(computerSelection === "scissors") return "Player wins!";
    }

    //Player selects paper
    if(playerSelection === "paper"){
        if(computerSelection === "scissors") return "Computer wins!";
        else if(computerSelection === "rock") return "Player wins!";
    }

    //Player selects scissors
    if(playerSelection === "scissors"){
        if(computerSelection === "rock") return "Computer wins!";
        else if(computerSelection === "paper") return "Player wins!";
    }


};

let computerSelection = getComputerChoice().toLowerCase();
let playerSelection = prompt("Select your weapon (rock, paper or scissors): ").toLowerCase();
playRound(playerSelection, computerSelection);
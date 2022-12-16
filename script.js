

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
        console.log("No winner in this round!");
        return;
    }
    
    //Player selects rock
    if(playerSelection === "rock"){
        if(computerSelection === "paper") return 0;
        else if(computerSelection === "scissors") return 1;
    }

    //Player selects paper
    if(playerSelection === "paper"){
        if(computerSelection === "scissors") return 0;
        else if(computerSelection === "rock") return 1;
    }

    //Player selects scissors
    if(playerSelection === "scissors"){
        if(computerSelection === "rock") return 0;
        else if(computerSelection === "paper") return 1;
    }

};

let game = function(){

    let playerScore = 0;
    let computerScore = 0;
    
    for(i = 0; i < 5; i++) {

        let playerSelection = prompt("Select your weapon (rock, paper or scissors): ").toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();

        if(playRound(playerSelection, computerSelection)){ // equal to playRound(...) === 1
            playerScore++;
            console.log("Player wins this round!");
            console.log("Player score: "+playerScore +"\n" + "Computer score: "+computerScore);
        }
        else{
            computerScore++;
            console.log("Computer wins this round!");
            console.log("Player score: "+playerScore +"\n" + "Computer score: "+computerScore);
        }
    }

    if(playerScore > computerScore){
        console.log("PLAYER WINS, GOOD GAME!");
    }
    else{
        console.log("COMPUTER WINS, GOOD GAME!");
    }
};

game();
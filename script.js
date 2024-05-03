function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    randomnum = Math.floor(Math.random() * choice.length)
    return choice[randomnum]
}

function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return "Tie."
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "You Win."
    } else {
        return "You Lose."
    }
}   

function playGame(userchoice) {
    let computerChoice = getComputerChoice()
    console.log(play(userchoice, computerChoice))
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let userInput;
rock.addEventListener("click", () => {
    userInput = "rock";
    playGame(userInput);
    })
paper.addEventListener("click", () => {
    userInput = "paper";
    playGame(userInput);
})
scissors.addEventListener("click", () => {
    userInput = "scissors";
    playGame(userInput);
})
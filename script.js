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

function playGame() {
    let userInput = prompt("Rock, Paper, or Scissors?")
    let computerChoice = getComputerChoice()
    console.log(play(userInput, computerChoice))
}

while (true) {
    playGame()
}

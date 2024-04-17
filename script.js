function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    randomnum = Math.floor(Math.random() * choice.length)
    return choice[randomnum]
}

function play(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        console.log("Tie")
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        console.log("You Win!")
    } else {
        console.log("You Lose!")
    }
}
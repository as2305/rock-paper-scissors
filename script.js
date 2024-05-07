const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    randomnum = Math.floor(Math.random() * choice.length)
    return choice[randomnum]
}
let playerScore = 0;
let computerScore = 0;
function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return "Tie."
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        return "You Win."
        
    } else {
        computerScore++;
        return "You Lose."
        
    }
}   

function playGame(userchoice) {
    let computerChoice = getComputerChoice()
    const output = document.getElementById("output")
    output.textContent = play(userchoice, computerChoice)
    const winner = document.getElementById("winner")
    const score = document.getElementById("score")
    score.textContent = ("Player: "+ playerScore+ " | Computer: "+ computerScore)
    if (playerScore == 5) {
        winner.textContent = "The winner is player!"
        winner.style.color = "green";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if(computerScore == 5) {
        winner.textContent = "The winner is computer!";
        winner.style.color = "red";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    console.log(playerScore);
    console.log(computerScore);
}


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
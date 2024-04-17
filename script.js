function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    randomnum = Math.floor(Math.random() * choice.length)
    return choice[randomnum]
}

console.log(getComputerChoice())
function randomChoice() {
     let choice = Math.floor(Math.random() * 3)
     return choice
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let choice = randomChoice()
    let computerChoice = choices[choice]
    console.log(
        'choice',
        choice,
        choices
    )
    return computerChoice
}

function playRound(playerChoice, computerChoice) {
    let round = 0
    let playerWins = 0
    let computerWins = 0
    let game = true
    while (game) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("select a move\nrock\npaper\nscissors")
        if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
            playerWins++
            round++ 
            alert(`computer chose ${computerChoice}. You won round ${round}.\nWins: ${playerWins}\nLosses: ${computerWins}`)
        }
        else if (playerChoice === computerChoice) {
            round++
            alert(`computer chose ${computerChoice}. Round ${round} is a draw`)
        }
        else {
            computerWins++
            round++
            alert(`computer chose ${computerChoice}. You lost round ${round}.\nWins: ${playerWins}\nLosses: ${computerWins}`)
        }
        if (playerWins === 3) {
            alert("Congratulations! You won!")
            game = false
            let playAgain = prompt("Play another round?\nyes/no")
            if (playAgain === "yes") {
                game = true
                round = 0
                computerWins = 0
                playerWins = 0
            }
        } 
        if (computerWins === 3) {
            alert("You Lost. Try another round.")
            game = false
            let playAgain = prompt("Play another round?\nyes/no")
            if (playAgain === "yes") {
                game = true
                round = 0
                computerWins = 0
                playerWins = 0
            }
        }
    
    }
}

playRound()
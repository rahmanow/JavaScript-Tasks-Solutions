const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Name adam oynajak bolyanmy?');
    }
};
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Sen yendin, sen bet';
    }
    if (userChoice === computerChoice) {
        return 'Dene-den';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Sen yendin';
        } else {
            return 'Kompyuter yendi';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Sen yendin';
        } else {
            return 'Kompyuter yendi';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Sen yendin';
        } else {
            return 'Kompyuter yendi';
        }
    }
}

function playGame() {
    let computerChoice = getComputerChoice();
    console.log('Kompyuter: ' + computerChoice);

    let userChoice = getUserChoice('scissors');
    console.log('Sen: '+ userChoice);

    console.log(determineWinner (userChoice, computerChoice));
}

playGame();
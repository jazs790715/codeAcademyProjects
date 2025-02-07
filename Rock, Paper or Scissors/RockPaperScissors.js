
const userChoice = () => {
    let user = prompt("Rock, Paper or Scissors?");
    user = user.toLowerCase();
    return (user === "rock" || user === "paper" || user === "scissors") ? user : alert("Invalid choice");
}

const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

const compareChioces = (choiseUser, choiseComputer)=>{
    switch (choiseUser) {
        case 'rock':
            return (choiseComputer === 'rock') ? 'Tie' : (choiseComputer === 'paper') ? 'Computer wins' : 'User wins';
            break;
        
        case 'paper':
            return (choiseComputer === 'rock') ? 'User wins' : (choiseComputer === 'paper') ? 'Tie' : 'Computer wins';
            break;
        
        case 'scissors':
            return (choiseComputer === 'rock') ? 'Computer wins' : (choiseComputer === 'paper') ? 'User wins' : 'Tie';
            break;

        default:
            break;
    }

}

const playGame = () => {
    const user = userChoice(); console.log(`User: ${user}`);
    console.log(`Computer: ${computer}`);
    console.log(compareChioces(user, computer));
}

playGame();
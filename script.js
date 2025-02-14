function playGame(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    document.getElementById("userChoice").innerText = "You chose: " + userChoice;
    document.getElementById("computerChoice").innerText = "Computer chose: " + computerChoice;
    document.getElementById("result").innerText = result;
}

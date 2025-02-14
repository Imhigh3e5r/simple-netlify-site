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

    // Select result elements
    const resultContainer = document.querySelector(".results");
    const userChoiceText = document.getElementById("userChoice");
    const computerChoiceText = document.getElementById("computerChoice");
    const resultText = document.getElementById("result");

    // Remove the animation class to reset it
    resultContainer.classList.remove("show");

    // Update text content immediately
    userChoiceText.innerText = "You chose: " + userChoice;
    computerChoiceText.innerText = "Computer chose: " + computerChoice;
    resultText.innerText = result;

    // Add a slight delay before adding the animation class
    setTimeout(() => {
        resultContainer.classList.add("show");
    }, 100); // Delay to allow fade-in animation
}

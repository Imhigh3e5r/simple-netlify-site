function playGame(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    let win = false; // Track if user wins

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win! 🎉";
        win = true; // User won
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

        // Trigger confetti if user wins
        if (win) {
            launchConfetti();
        }
    }, 100);
}

// Set the version number here
const version = "1.0.3"; // Updated version

// Automatically update version in the footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("version-number").innerText = version;
});

// Function to create confetti
function launchConfetti() {
    const confettiCount = 50; // Increased confetti count for a fuller effect
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Randomize position, size, and animation duration
        confetti.style.left = Math.random() * 100 + "vw"; 
        confetti.style.top = "-5vh"; // Start slightly above the screen
        confetti.style.animationDuration = Math.random() * 2 + 1 + "s"; 
        confetti.style.width = Math.random() * 10 + 5 + "px"; 
        confetti.style.height = confetti.style.width;

        document.body.appendChild(confetti);

        // Ensure confetti falls smoothly and lasts longer
        setTimeout(() => {
            confetti.remove();
        }, 2500); // Increased duration for smoother effect
    }
}

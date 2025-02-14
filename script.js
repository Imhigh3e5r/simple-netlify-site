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

// Function to create confetti
function launchConfetti() {
    const confettiCount = 40; // Number of confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        confetti.style.animationDuration = Math.random() * 1.5 + 0.5 + "s"; // Random speeds
        confetti.style.width = Math.random() * 8 + 4 + "px"; // Random sizes
        confetti.style.height = confetti.style.width;

        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 1500);
    }
}

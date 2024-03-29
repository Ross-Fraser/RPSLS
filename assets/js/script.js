// waits for the DOM to load before running the game
document.addEventListener("DOMContentLoaded", function () {
  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]; // Possible moves for the game
  let playerScore = 0; // Keeps track of the players score
  let computerScore = 0; // Keeps track of the computers score
  let gamesPlayed = 0; // Keeps track of the games 
  
  const btnStartGame = document.getElementById("btnStartGame");
  const btnInstructions = document.getElementById("btnInstructions");
  const instructions = document.getElementById("instructions");
  const btnReturnInstructions = document.getElementById("btnReturnInstructions");
  const btnsPlayerChoice = document.getElementById("btnsPlayerChoice");
  const scoreboard = document.getElementById("scoreboard");
  const results = document.getElementById("results");
  const resultsHeading = document.getElementById("resultsHeading");
  const btnReturnGame = document.getElementById("btnReturnGame");
  const roundResults = document.getElementById("results");

  // Reset display elements as needed
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;

  // Hides the start buttons
  function hideStartButtons() {
    btnStartGame.style.display = "none";
    btnInstructions.style.display = "none";
  }

  // Shows the game content
  function showGameContent() {
    btnsPlayerChoice.style.display = "block";
    scoreboard.style.display = "block";
    resultsHeading.style.display = "block";
    results.style.display = "block";
    btnReturnGame.style.display = "block";
  }

  // Shows the instructions
  function showInstructions() {
    console.log("Showing instructions...");
    instructions.style.display = "block";
    btnReturnInstructions.style.display = "block";
  }
  
  // Hides the game content
  function hideGameContent() {
    btnsPlayerChoice.style.display = "none";
    scoreboard.style.display = "none";
    resultsHeading.style.display = "none";
    results.style.display = "none";
    btnReturnGame.style.display = "none";
  }

  // Displays the results of the round
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!, get them next time.";
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Rock" && computerSelection === "Lizard") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Paper" && computerSelection === "Spock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper") ||
      (playerSelection === "Scissors" && computerSelection === "Lizard") ||
      (playerSelection === "Lizard" && computerSelection === "Paper") ||
      (playerSelection === "Lizard" && computerSelection === "Spock") ||
      (playerSelection === "Spock" && computerSelection === "Rock") ||
      (playerSelection === "Spock" && computerSelection === "Scissors")
    ) {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}, you rock, no pun intended :).`;
    } else {
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}, keep trying.`;
    }
  }

  // Computers choice is randomly selected from the choices
  function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // Orchestrates the game
  function handleClick(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    // Checks if 3 games have been played
    if (gamesPlayed >= 3) {
      if (playerScore > computerScore) {
        showCelebrationMessage();
      } else if (playerScore < computerScore) {
        showCommiserationMessage();
      } else {
        showTieMessage();
      }
      resetGame();
    } else {
      gamesPlayed++;
      displayResult(result);
      updateScoreboard();
    }
  }

  // Updates the round results
  function displayResult(results) {
    roundResults.textContent = results;
  }

  // Updates the scoreboard
  function updateScoreboard() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("gamesPlayed").textContent = gamesPlayed;
  }

  // Reset scores and gamesPlayed
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
    updateScoreboard();
    displayResult(results);
    displayResult("Make your choice");

  }

  // Shows the winner celebration
  function showCelebrationMessage() {
    alert("Congratulations, you are the winner!");
    resetGame();
  }

  // Shows the commiserations message
  function showCommiserationMessage() {
    alert("Sorry, you lost the game!");
    resetGame();
  }

  // Shows the tie message
  function showTieMessage() {
    alert("It's a tie!");
    resetGame();
  }

  // Hides the instructions and returns to the main screen
  function hideInstructions() {
    instructions.style.display = "none";
    btnReturnInstructions.style.display = "none";
  }

  // Shows the start buttons
  function showStartButtons() {
    btnStartGame.style.display = "block";
    btnInstructions.style.display = "block";
  }

  // Event listeners
  btnStartGame.addEventListener("click", () => {
    hideStartButtons();
    showGameContent();
  });

  btnInstructions.addEventListener("click", () => {
    console.log("btnInstructions clicked");
    hideStartButtons();
    showInstructions();
  });

  btnReturnGame.addEventListener("click", () => {
    hideGameContent();
    showStartButtons();
  });

  btnReturnInstructions.addEventListener("click", () => {
    hideInstructions();
    showStartButtons();
  });

  document.getElementById("rock").addEventListener("click", () => handleClick("Rock"));
  document.getElementById("paper").addEventListener("click", () => handleClick("Paper"));
  document.getElementById("scissors").addEventListener("click", () => handleClick("Scissors"));
  document.getElementById("lizard").addEventListener("click", () => handleClick("Lizard"));
  document.getElementById("spock").addEventListener("click", () => handleClick("Spock"));
});

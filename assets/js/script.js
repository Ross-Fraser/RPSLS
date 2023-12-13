// waits for the DOM to load before running the game
document.addEventListener("DOMContentLoaded", function () {
  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]; // Possible moves for the game
  let playerScore = 0; // Keeps track of the players score
  let computerScore = 0; // Keeps track of the computers score

  // Hides the start buttons
  function hideStartButtons() {
    const btnStartGame = document.getElementById("btnStartGame");
    const btnInstructions = document.getElementById("btnInstructions");
    btnStartGame.style.display = "none";
    btnInstructions.style.display = "none";
  }

  // Shows the game content
  function showGameContent() {
    const btnsPlayerChoice = document.getElementById("btnsPlayerChoice");
    const scoreboard = document.getElementById("scoreboard");
    const results = document.getElementById("results");
    const btnReturnGame = document.getElementById("btnReturnGame");
    btnsPlayerChoice.style.display = "block";
    scoreboard.style.display = "block";
    results.style.display = "block";
    btnReturnGame.style.display = "block";
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

  // Event listeners
  document.getElementById("btnStartGame").addEventListener("click", () => {
    hideStartButtons();
    showGameContent();
  });

  document.getElementById("rock")
    .addEventListener("click", () => handleClick("Rock"));
  document.getElementById("paper")
    .addEventListener("click", () => handleClick("Paper"));
  document.getElementById("scissors")
    .addEventListener("click", () => handleClick("Scissors"));
  document.getElementById("lizard")
    .addEventListener("click", () => handleClick("Lizard"));
  document.getElementById("spock")
    .addEventListener("click", () => handleClick("Spock"));

});

# Rock Paper Scissors Lizard Spock Game - Testing Documentation

This document outlines the testing procedures and scenarios for the Rock, Paper, Scissors, Lizard, Spock game.

## Table of Contents

- [Validation Testing](#validation-testing)
- [Button Testing](#button-testing)
- [Option Testing](#option-testing)
- [Game Logic Testing](#game-logic-testing)

## Validation Testing

- HTML
    - No errors were found when passing  through the W3C HTML validator.

- CSS
    - No errors were found when passing  through the W3C (jigsaw) css validator.

- Accessibility
    - I confirmed that the colors and fonts are easy to read and accessible by running it through lighthouse in devtools as well as wave.webaim.org.

## Button Testing

| Button        | Description                                 | Expected Outcome                                      | Actual Outcome                 |
|---------------|---------------------------------------------|-------------------------------------------------------|--------------------------------|
| Rock Button   | Click on the Rock button.                   | Player move is set to Rock.                           | Player move is set to Rock.    |
| Paper Button  | Click on the Paper button.                  | Player move is set to Paper.                          | Player move is set to Paper.   |
| Scissors Button| Click on the Scissors button.              | Player move is set to Scissors.                       | Player move is set to Scissors.|
| Lizard Button | Click on the Lizard button.                 | Player move is set to Lizard.                         | Player move is set to Lizard.  |
| Spock Button  | Click on the Spock button.                  | Player move is set to Spock.                          | Player move is set to Spock.   |

## Option Testing

| Option        | Description                                 | Expected Outcome                                      | Actual Outcome                 |
|---------------|---------------------------------------------|-------------------------------------------------------|--------------------------------|
| Rock Option   | Player selects Rock as a move.              | Player move is set to Rock.                           | Player move is set to Rock.    |
| Paper Option  | Player selects Paper as a move.             | Player move is set to Paper.                          | Player move is set to Paper.   |
| Scissors Option| Player selects Scissors as a move.         | Player move is set to Scissors.                       | Player move is set to Scissors.|
| Lizard Option | Player selects Lizard as a move.            | Player move is set to Lizard.                         | Player move is set to Lizard.  |
| Spock Option  | Player selects Spock as a move.             | Player move is set to Spock.                          | Player move is set to Spock.   |

## Game Logic Testing

| Scenario                    | Description                                  | Expected Outcome                                      | Actual Outcome                                      |
|-----------------------------|----------------------------------------------|-------------------------------------------------------|-----------------------------------------------------|
| Player chooses Rock         | Player selects Rock, and Computer selects... | Player wins if Computer selects Scissors or Lizard.   | Player wins if Computer selects Scissors or Lizard. |
| Player chooses Paper        | Player selects Paper, and Computer selects...| Player wins if Computer selects Rock or Spock.        | Player wins if Computer selects Rock or Spock.      |
| Player chooses Scissors     | Player selects Scissors, and Computer...     | Player wins if Computer selects Paper or Lizard.      | Player wins if Computer selects Paper or Lizard.    |
| Player chooses Lizard       | Player selects Lizard, and Computer selects..| Player wins if Computer selects Spock or Paper.       | Player wins if Computer selects Spock or Paper.     |
| Player chooses Spock        | Player selects Spock, and Computer selects...| Player wins if Computer selects Rock or Scissors.     | Player wins if Computer selects Rock or Scissors.   |
| Tie Scenario                | Player and Computer select the same option.  | The game is a tie.                                    | The game is a tie.                                  |


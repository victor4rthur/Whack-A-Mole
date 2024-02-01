# Whack-a-Mole Game

This simple Whack-a-Mole game allows players to click on appearing moles within a time limit and accumulate a score.

## Usage

https://victor4rthur.github.io/Whack-A-Mole/

## Code Explanation

The JavaScript code is organized into functions for clarity:

- `randTime(min, max)`: Generates a random time between the specified minimum and maximum values.
- `randomHole(holes)`: Selects a random hole from the provided array, ensuring it is not the same as the last one.
- `peep()`: Makes a mole appear in a random hole and disappear after a random time, calling itself recursively if the game time is not up.
- `startGame()`: Initializes the game by resetting the score, setting up the time limit, and starting the appearance of moles.
- `bonk(e)`: Handles the click event on a mole, incrementing the score and updating the scoreboard.

Feel free to customize and integrate this code into your projects!

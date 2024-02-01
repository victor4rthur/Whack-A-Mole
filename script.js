// Select all elements with the class 'hole' and store them in a NodeList
const holes = document.querySelectorAll('.hole');

// Select the element with the class 'score' and store it in a variable
const scoreBoard = document.querySelector('.score');

// Select all elements with the class 'mole' and store them in a NodeList
const moles = document.querySelectorAll('.mole');

// Variable to store the last hole where a mole appeared
let lasthole;

// Variable to track whether the game time is up
let timeup = false;

// Variable to store the player's score
let score = 0;

// Function to generate a random time between min and max values
function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Function to get a random hole from the provided array of holes
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    // Ensure the same hole is not selected consecutively
    if (hole === lasthole) {
        return randomHole(holes);
    }

    lasthole = hole;
    return hole;
}

// Function to make a mole appear and disappear after a random time
function peep() {
    const time = randTime(200, 1000);
    const hole = randomHole(holes);

    // Make the mole appear by adding the 'up' class to the hole
    hole.classList.add('up');

    // Set a timeout to make the mole disappear after a certain time
    setTimeout(() => {
        hole.classList.remove('up');

        // If the game time is not up, continue showing moles
        if (!timeup) {
            peep();
        }
    }, time);
}

// Function to start the game by initializing score and showing moles
function startGame() {
    // Reset the score and update the scoreboard display
    scoreBoard.textContent = 0;

    // Set the game time to not be up
    timeup = false;

    // Initialize the score
    score = 0;

    // Start showing moles
    peep();

    // Set a timeout to end the game after 10 seconds
    setTimeout(() => (timeup = true), 10000);
}

// Function to handle when a mole is bonked (clicked)
function bonk(e) {
    // Check if the click event is trusted to prevent cheating
    if (!e.isTrusted) return;

    // Increment the score and update the scoreboard
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

// Add a click event listener to each mole, calling bonk when clicked
moles.forEach(mole => mole.addEventListener('click', bonk));

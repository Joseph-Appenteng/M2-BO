


// Get a reference to the canvas element
const canvas = document.getElementById('game');
// Get a reference to the drawing context
const ctx = canvas.getContext('2d');

// Create a new Image object for the mole
const mole = new Image();
// Set the source for the mole image
mole.src = './i.png';

// Wait for the image to load
mole.onload = function() {
  // Draw the mole at the coordinates (10, 10)
  ctx.drawImage(mole, 10, 10);
};

// Create a variable to track the mole's position
let molePosition = [10, 10];

// Create a function to move the mole to a random position
function moveMole() {
  // Generate random x and y coordinates within the canvas
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;

  // Update the mole's position
  molePosition = [x, y];
}

// Create a function to draw the mole at its current position
function drawMole() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the mole at its current position
  ctx.drawImage(mole, molePosition[0], molePosition[1]);
}

// Set an interval to move the mole every 1000 milliseconds
setInterval(moveMole, 1000);

// Set an interval to draw the mole every 50 milliseconds
setInterval(drawMole, 50);

// Create a variable to track the player's score
let score = 0;

// Create a function to handle player input
function handleInput(event) {
  // Check if the player clicked the mole
  if (
    event.offsetX >= molePosition[0] &&
    event.offsetX <= molePosition[0] + mole.width &&
    event.offsetY >= molePosition[1] &&
    event.offsetY <= molePosition[1] + mole.height
  ) {
    // Increment the player's score
    score += 1;

    // Update the score on the screen
    ctx.font = '24px sans-serif';
    ctx.fillText(`Score: ${score}`, 10, 30);
  }
}

// Listen for mouse clicks on the canvas
canvas.addEventListener('click', handleInput);

// Create a new Image object for the background
const background = new Image();
// Set the source for the background image
background.src = 'https://images.app.goo.gl/MJ6miXHA3UG4E2JT7';

// Wait for the image to load
background.onload = function() {
  // Draw the background on the canvas
  ctx.drawImage(background, 0, 0);

  // Draw the mole at its initial position
  ctx.drawImage(mole, molePosition[0], molePosition[1]);
};


// Create an array to store the positions of the holes
const holePositions = [[100, 100], [200, 200], [300, 300]];

// Create a function to move the mole to a random position
function moveMole() {
  // Generate a random index to select a hole position
  const index = Math.floor(Math.random() * holePositions.length);

  // Update the mole's position to the selected hole position
  molePosition = holePositions[index];
}

// Check if the background image loaded successfully
if (background.complete && background.naturalWidth !== 0) {
  console.log('The background image has been loaded successfully.');
} else {
  console.error('There was an error loading the background image.');
}

// Check if the mole image loaded successfully
if (mole.complete && mole.naturalWidth !== 0) {
  console.log('The mole image has been loaded successfully.');
} else {
  console.error('There was an error loading the mole image.');
}

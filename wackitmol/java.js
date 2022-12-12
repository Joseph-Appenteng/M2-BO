const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0

const sound = new Audio("assets/smash.mp3")

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole.png'

    img.addEventListener('click', () => {
        score += 10
        sound.play()
        scoreEl.textContent = score
        img.src = 'assets/mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

// Set the countdown duration in seconds
var duration = 15;

// Update the countdown every 1 second
var interval = setInterval(function() {
  // Decrement the duration
  duration--;

  // Update the countdown text
  document.getElementById("timer").innerHTML = duration;

  // If the countdown is finished, stop the interval and alert the user
  if (duration === 0) {
    clearInterval(interval);
    alert("Game Over");
    window.location.reload();
   

  }
}, 1000);



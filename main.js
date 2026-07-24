

// ** State ** //
let currColor = generateRandomHslColor()

// ** Event listeners ** // 
document.addEventListener('DOMContentLoaded', () => {
    setRandomSwatchColor()

    const form = document.getElementById("hsl_form");

    // Set up submit logic
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        // Show answers and hide inputs
        form.classList.add('hsl_form--answer')
        form.classList.remove('hsl_form--guessing')

        // Disable submit button
        document.getElementById("submit").disabled = true

        // Add retry button 
        const retryBtn = document.createElement('button')
        retryBtn.type = 'button'
        retryBtn.textContent = 'Try another'
        retryBtn.addEventListener('click', () => location.reload())
        form.appendChild(retryBtn)

        checkAnswers()
    })

    // Set up logic to show slider values
    const sliderIds = ["s", "l"];
    sliderIds.forEach((id) => {
        const slider = document.querySelector(`#${id} input`);
        const valueDisplay = document.querySelector(`#${id} .input-val`);

        slider.addEventListener("input", () => {
            valueDisplay.textContent = slider.value;
        });
    })
})

function checkAnswers() {
    const sEl = document.getElementById('s')
    const lEl = document.getElementById('l')

    const sGuess = sEl.querySelector('input').value
    const lGuess = lEl.querySelector('input').value

    const sAnswerEl = sEl.querySelector('.answer')
    const lAnswerEl = lEl.querySelector('.answer')

    // Give answers
    sAnswerEl.innerHTML = checkGuess(checkSGuess, sGuess, currColor.s)
    lAnswerEl.innerHTML = checkGuess(checkLGuess, lGuess, currColor.l)
}

// ** Helper functions that interact with DOM ** // 
function setRandomSwatchColor() {
    const swatch = document.getElementById("swatch")
    swatch.style.backgroundColor = createHslColor(currColor)

    const hue = document.getElementById("hue")
    hue.style.backgroundColor = createHslColor({h: currColor.h, s: 50, l: 50})
}

// ** Helper functions ** //
function createHslColor({h, s, l}) {
    return  `hsl(${h}, ${s}%, ${l}%)`;
}

function generateRandomHslColor() {
    const h = Math.floor(Math.random() * 361); // 0 to 360
    const s = Math.floor(Math.random() * 101); // 0 to 100
    const l = Math.floor(Math.random() * 101); // 0 to 100

    return {
        h, 
        s, 
        l
    }
}


// s is a value between 0-100 so if within +- 10 let's say it's right.
function checkSGuess(guess, actual) {
    if (Math.abs(actual - guess) < 10 ) {
        return 'pass'
    } else {
        return 'fail'
    }
}

// l is a value between 0-100 so if within +- 10 let's say it's right.
function checkLGuess(guess, actual) {
    if (Math.abs(actual - guess) < 10 ) {
        return 'pass'
    } else {
        return 'fail'
    }
}

function checkGuess(guessCheckerFn, guess, actual) {
    if (guessCheckerFn(guess, actual) === 'pass') {
        return`✅ ${guess} (Actual: ${actual})`
    } else {
        return `❌ ${guess} (Actual: ${actual})`
    }
}


// ** State ** //
let currColor = generateRandomHslColor()


// ** Event listeners ** // 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("hsl_form");
    const hGuess = document.getElementBy
    const swatch = document.getElementById("swatch")
    swatch.style.backgroundColor = createHslColor(currColor)

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        form.classList.add('hsl_form--answer')
        form.classList.remove('hsl_form--guessing')

        const hGuess = document.getElementById('input_h').value
        const sGuess = document.getElementById('input_s').value
        const lGuess = document.getElementById('input_l').value

        checkGuess(guess, currColor);
        if (checkHGuess(hGuess, currColor.h) === 'pass') {

        }
    })

    form.addEventListener("input", () => {
        const button = document.getElementById("submit")
        button.disabled = !form.checkValidity();
    });
})

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

// h is a value between 0-360 so if within +- 36 let's say it's right.
function checkHGuess(guess, actual) {
    if (Math.abs(actual - guess) < 36 ) {
        return 'pass'
    } else {
        return 'fail'
    }
}


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

        const hAnswerEl = document.querySelector('#h .answer')
        const sAnswerEl = document.querySelector('#s .answer')
        const lAnswerEl = document.querySelector('#l .answer')


        hAnswerEl.innerHTML = "" 
        if (checkHGuess(hGuess, currColor.h) === 'pass') {
            hAnswerEl.innerHTML = `✅ ${hGuess} (Actual: ${currColor.h})`
        } else {
            hAnswerEl.innerHTML = `❌ ${hGuess} (Actual: ${currColor.h})`
        }

        sAnswerEl.innerHTML = "" 
        if (checkSGuess(sGuess, currColor.s) === 'pass') {
            sAnswerEl.innerHTML = `✅ ${sGuess} (Actual: ${currColor.s})`
        } else {
            sAnswerEl.innerHTML = `❌ ${sGuess} (Actual: ${currColor.s})`
        }

        lAnswerEl.innerHTML = "" 
        if (checkLGuess(lGuess, currColor.l) === 'pass') {
            lAnswerEl.innerHTML = `✅ ${lGuess} (Actual: ${currColor.l})`
        } else {
            lAnswerEl.innerHTML = `❌ ${lGuess} (Actual: ${currColor.l})`
        }
    })
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
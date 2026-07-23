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

let currColor = generateRandomHslColor()
let guessCorrectness = {
    h: undefined,
    s: undefined, 
    l: undefined,
} 


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("hsl_form");
    const swatch = document.getElementById("swatch")
    swatch.style.backgroundColor = createHslColor(currColor)

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const hGuess = document.getElementById('h').value
        const sGuess = document.getElementById('s').value
        const lGuess = document.getElementById('l').value
        
        let alertMsg = ''
        if (Number(hGuess) !== Number(currColor.h)) {
            alertMsg += `Wrong h. Was ${currColor.h} got ${hGuess}\n`
        } else {
            alertMsg += `Correct! Hue was ${currColor.h}`
        }
        if (Number(sGuess) !== Number(currColor.s)) {
            alertMsg += `Wrong s. Was ${currColor.s} got ${sGuess}\n`
        } else {
            alertMsg += `Correct! Saturation was ${currColor.s}`
        }
        if (Number(lGuess) !== Number(currColor.l)) {
            alertMsg += `Wrong l. Was ${currColor.l} got ${lGuess}\n`
        } else {
            alertMsg += `Correct! Lightness was ${currColor.l}`
        }

        alert(alertMsg)
    })

    form.addEventListener("input", () => {
        const button = document.getElementById("submit")
        button.disabled = !form.checkValidity();
    });
})


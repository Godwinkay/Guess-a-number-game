let displayText = document.getElementById('display')
let enter_Btn = document.getElementById('enter')
let restart_Btn = document.getElementById('restart')
let random = Math.floor(Math.random()*100)


function guessNumber (event) {
    event.preventDefault()
    let input = document.getElementById('input').value 
    input = parseInt(input)

    if (random == input) {
        displayText.innerHTML = `You Won. Congratulation`
        display.style.color = 'green'
    }

    else if (input < random && input < 0) {
        displayText.innerHTML = `No negative numbers`
        display.style.color = 'red'
    }

    else if (input < random) {
        displayText.innerHTML = `Too Low. Try a Higher Number`
        display.style.color = 'blue'
    }

    else if (input > random && input > 99) {
        displayText.innerHTML = `Number should not be more than 99 `
        display.style.color = 'red'
    }

    else if (input > random) {
        displayText.innerHTML = `Too high. Try a lower number`
        display.style.color = 'purple'
    }


}

restart_Btn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e)
    location.reload()
})

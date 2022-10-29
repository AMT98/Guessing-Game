let msg1 = document.getElementById("message1")
let msg2 = document.getElementById("message2")

let guess1 = document.getElementById('guess1')
let guess2 = document.getElementById('guess2')
let guess3 = document.getElementById('guess3')
let guess4 = document.getElementById('guess4')
let guess5 = document.getElementById('guess5')

let play = document.getElementById("play")

let answer = Math.floor(Math.random() * 100) + 1
let guessCount = document.getElementById("no_of_guesses")
let guessDiv = document.getElementById("guesses")

let guess = document.getElementById("users-guess")
let restart = document.getElementById("restart")
let hint = document.getElementById('hint')


window.onload = function () {
    guess.focus()
}



let total = []


guess, play.addEventListener('click', function () {
    let usersInput = document.getElementById("users-guess").value;

    if (usersInput < 1 || usersInput > 100) {
        msg1.innerText = "Invalid number";
        msg2.innerText = "Please choose a number between 1 and 100";
        msg1.style.color = "red"
        msg2.style.color = "white"
    } else {
        total.push(guess.value)

        if (usersInput > answer) {
            msg1.innerText = "You guessed high";
            msg2.innerText = "Try guessing lower";
            msg1.style.color = "red"
            msg2.style.color = "red"


        } else if (usersInput < answer) {
            msg1.innerText = "You guessed low";
            msg2.innerText = "Try guessing higher";
            msg1.style.color = "blue"
            msg2.style.color = "blue"


        } else if (usersInput == answer) {
            msg1.innerText = "Congratulations! You guessed the right number.";
            msg2.innerText = "The winning number was " + answer + "!";
            play.innerText = `Click "Let's play again!" to start a new game.`
            msg1.style.color = "white"
            msg2.style.color = "white"
            guessDiv.style.display = "none"
            guess.style.display = "none";
            hint.style.display = "none"
            play.style.display = "none"

        }

    }
    if (total.length === 5 && total[4] != answer) {
        msg1.innerText = "Game Over"
        msg1.style.color = "white"
        guessDiv.style.display = "none"
        guess.style.display = "none";
        hint.style.display = "none"
        msg2.style.display = "none"
        play.style.display = "none"
    } else {
        if(total[0]){
            guess1.innerText = total[0]

        }
        if(total[1]){

            guess2.innerText = total[1]
        }
        if(total[2]){
        
            guess3.innerText = total[2]
        
        }
        if(total[3]){
            
            guess4.innerText = total[3]
        }
        if(total[4]){
            
            guess5.innerText = total[4]
        }



    }

})

console.log(total)

guess.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        play.click()
    }
});

play.addEventListener('click', function (e) {
    e.preventDefault();
    guess.value = '';
})

restart.addEventListener('click', function () {

    location.reload()
})


let answer1 = Math.floor(Math.random() * 100) + 1
let answer2 = Math.floor(Math.random() * 100) + 1
let answer3 = Math.floor(Math.random() * 100) + 1
let answer4 = Math.floor(Math.random() * 100) + 1
let answer5 = Math.floor(Math.random() * 100) + 1
hint.addEventListener('click', function () {
    let randomAnswer= [answer1,answer2,answer,answer4,answer3,answer5].sort()
    hint.innerText = randomAnswer.join(", ")
    // hint.innerText = `${answer1}, ${answer3}, ${answer5},${answer2}, ${answer},${answer6}`
    setTimeout(function () {
        hint.style.display = "none"
    }, 1500)


})
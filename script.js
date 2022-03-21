'strict'

let randomNumber = Number;
let guess = String;

function computerPlay() {


    randomNumber = Math.floor(1 + Math.random() * (2 - 0 + 1));

    if (randomNumber = 1) {
        guess = "rock"
    }
    if (randomNumber = 2) {
        guess = "paper"
    }
    if (randomNumber = 3) {
        guess = "sizors"
    }
    return guess
}
console.log(computerPlay())
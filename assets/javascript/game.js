var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letter = letters[Math.floor(Math.random() * letters.length)];
var lettersUsed = [];
var wins = 0;
var losses = 0;
var chances = 10;

$("body").on("click", "#STARTGAME", function() {
    startGame()
})


function startGame() {
    var letter = letters[Math.floor(Math.random() * letters.length)];
    // console.log(letter)
    document.getElementById("CHANCE").innerHTML = chances; 
    lettersUsed.splice(0);
    document.getElementById("LETTERSUSED").innerHTML = lettersUsed;

    document.onkeyup = function (event) {
        var guess = event.key;
        console.log(guess);
        for(i=0; i < letters.length; i++) {
            if(guess === letters[i] || guess.toUpperCase() === letters[i].toUpperCase()) {
                // console.log(guess)
                checkGuess(guess, letter)
            }
        }
    }
}

function checkGuess(guess, letter){
    if(guess === letter || guess.toUpperCase() === letter.toUpperCase()){
        wins += 1;
        document.getElementById("WINS").innerHTML = wins;
        alert("You Win!  The letter was " + letter);
        chances = 10
        startGame();
        }
    else {
        lettersUsed.push(guess);
        document.getElementById("LETTERSUSED").innerHTML = lettersUsed;
        chances -= 1;
        document.getElementById("CHANCE").innerHTML = chances;
        checkChances()
    }
}

function checkChances() {
    if (chances === 0) {
        losses += 1;
        document.getElementById("LOSSES").innerHTML = losses;
        alert("You Lose! The letter was " + letter);
        chances = 10
        startGame();
    }
}
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letter = letters[Math.floor(Math.random() * letters.length)];
var lettersUsed = [];
var wins = 0;
var losses = 0;

$("body").on("click", "#STARTGAME", function() {
    startGame()
})


function startGame() {
    var chances = 10;
    var letter = letters[Math.floor(Math.random() * letters.length)];
    console.log(letter)
    document.getElementById("CHANCE").innerHTML = chances; 
    lettersUsed.splice(0);
    document.getElementById("LETTERSUSED").innerHTML = lettersUsed;

    document.onkeyup = function (event) {
        var guess = event.key;
        console.log(guess);
        if(guess === letter){
            wins += 1;
            document.getElementById("WINS").innerHTML = wins;
            alert("You Win!  The letter was " + letter);
            startGame();
            }
        else {
            lettersUsed.push(guess);
            document.getElementById("LETTERSUSED").innerHTML = lettersUsed;
            chances -= 1;
            document.getElementById("CHANCE").innerHTML = chances;
            if (chances < 0) {
                losses += 1;
                document.getElementById("LOSSES").innerHTML = losses;
                alert("You Lose! The letter was " + letter);
                startGame();
                
            }
        }
    }
}

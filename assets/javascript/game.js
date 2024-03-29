// JavaScript source code

//global variables
let birds = ["hawk", "cardinal", "dove", "osprey", "bluejay", "finch", "heron", "egret"];  //array of bird names
let gameBird = birds[Math.floor(Math.random() * birds.length)]; //name of bird selected randomly from array
let gameBirdArray = gameBird.split("");
let guessesRem = (gameBird.length + gameBird.length * .75);  //set number of guesses as twice the length of bird name i.e. bird.length*2
guessesRem = Math.round(guessesRem);//
let wrongGuesses = []; //array of wrong guesses for displaying
// let rightGuessesArray = [];  //array of correct guesses for display.  length & init elements set when gameBird set
let wins = 0;  //number of wins for display
let hiddenWordArray = [];//
let gameIndex = 0;
let alphaCheck = /[a-z]/;
let echoText = document.getElementById("echo");  //displays letter guessed
let birdAudio = document.getElementById("birdsAudio");
function playAudio(gameBird) {
    birdAudio.play();
}
// function gameBirdAudio(gameBird){
//     let currentBirdAudio = 
// }

//objects
let wordGuessGame = {
    init: function() {

        for (let i = 0; i < gameBirdArray.length; i++) {
            hiddenWordArray[i] = "_";
        };
        document.getElementById("wins").innerHTML = wins;
        // document.getElementById("currentBird").innerHTML = gameBird; //remove after testing
        document.getElementById("currentWord").innerHTML = hiddenWordArray.join("  ");
        document.getElementById("remGuesses").innerHTML = guessesRem;
        document.getElementById("bird-image").src = "assets/images/birds.jpg";
        //birdAudio.play();  //need to figure out why this doesn't play on load
    },
    play: function() {
        if (gameIndex === birds.length) {  //game ends when all elements of the game array have been presented
            return;
        };
        wordGuessGame.init();
        document.onkeyup = function(event) {  //capture 
            let guess = event.key.toLowerCase();
            // echoText.textContent = guess; //for testing only, remove once code verified
            if (!guess.match(alphaCheck) || (event.keyCode === 13)) { 
                alert("Invalid input.  Please enter a letter.")
            } else {        
                while (guessesRem !== 0 && hiddenWordArray.includes("_")) {
                if (gameBirdArray.includes(guess) && (guessesRem !== 0)) {  //right guess code
                    document.getElementById("goodGuessAudio").play();
                    for (let n = 0; n < gameBirdArray.length; n++) {
                        if (gameBirdArray[n] == guess) {
                            hiddenWordArray[n] = guess;
                            document.getElementById("currentWord").innerHTML = hiddenWordArray.join("  ");
                        }                   
                    };
                if (!hiddenWordArray.includes("_")) {
                    wins = wins + 1;
                    document.getElementById("wins").innerHTML = wins;
                    document.getElementById("game-bird-audio").src = "assets/sounds/" + gameBird + ".mp3";
                    document.getElementById("game-bird-audio").play();
                    document.getElementById("bird-image").src = "assets/images/"+ gameBird + ".jpg";
                    setTimeout(function(){ 
                        let ans = confirm("You Win!! Click OK to play again or Cancel to end game.");
                        if (ans) {
                            wordGuessGame.play();
                        } else {
                            alert("Game Over");
                            return;
                        };
                    }, 300);
                    // return "won";
                }
            } else {  //wrong guess code
                guessesRem = guessesRem - 1;
                document.getElementById("badGuessAudio").play();
                document.getElementById("remGuesses").innerHTML = guessesRem;
                if (!wrongGuesses.includes(guess)) {
                    wrongGuesses.push(guess);
                    document.getElementById("guesses").innerHTML = wrongGuesses.join(", ");
                };
                if (guessesRem === 0) {
                    setTimeout(function(){ 
                        let ans = confirm("You lost. Click OK to play again or Cancel to end game.");
                        if (ans) {
                            wordGuessGame.play();
                        } else {
                            alert("Game Over");
                            return;
                        };
                    }, 300);

                    return "lost";
                }
            };
            return;
            };
        }
    };
    gameIndex++;
    }
}

//calls
wordGuessGame.init();
wordGuessGame.play();
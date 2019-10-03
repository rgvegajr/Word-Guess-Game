// JavaScript source code

//global variables
let birds = ["hawk", "cardinal", "dove", "osprey", "bluejay", "finch", "bald eagle", "heron", "egret"];  //array of bird names
let gameBird = birds[Math.floor(Math.random() * birds.length)]; //name of bird selected randomly from array
let gameBirdArray = gameBird.split("");
let guessesRem = (gameBird.length + gameBird.length * .75);  //set number of guesses as twice the length of bird name i.e. bird.length*2
guessesRem = Math.round(guessesRem);//
let wrongGuesses = []; //array of wrong guesses for displaying
let rightGuessesArray = [];  //array of correct guesses for display.  length & init elements set when gameBird set
//let rightGuesses = "";  //array of correct guesses for display.  length set when gameBird set
let wins = 0;  //number of wins for display
//let badGuesses = "";
let hiddenWord = "";//

//variables to hold references to html elements for display
let directionsText = document.getElementById("directions");
let winsText = document.getElementById("wins");
let echoText = document.getElementById("echo");  //displays letter guessed
let guessesRemText = document.getElementById("guessesRem");
let guessesText = document.getElementById("guesses");
let currentWordText = document.getElementById("currentWord");

//objects
let wordGuessGame = {
    init: function () {
        for (let i = 0; i < gameBird.length; i++) {
            hiddenWord = hiddenWord + " _ ";
        };            
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("currentBird").innerHTML = gameBird; //remove after testing
        document.getElementById("currentWord").innerHTML = hiddenWord;
        document.getElementById("guessesRem").innerHTML = guessesRem;
    },
    play: function () {
        if (guessesRem > 0) {
            document.onkeyup = function (event) {
                let guess = event.key;
                echoText.textContent = guess;
                //if (gameBirdArray.includes(guess)) {
                //    echoText.textContent = guess;
                //    let arrIndex = gameBirdArray.indexOf(guess);
                //    rightGuessesArray[arrIndex] = guess;
                //    document.getElementById("currentWord").innerHTML = rightGuessesArray.join("");
                //} else {
                //    echoText.textContent = guess;
                //    wrongGuesses.push(guess);
                //    document.getElementById("guesses").innerHTML = wrongGuesses.join();
                //    guessesRem = guessesRem - 1;
                //    document.getElementById("guessesRem").innerHTML = guessesRem;
                //};
                if (gameBird.includes(guess)) {
                    for (let i = 0; i < gameBird.length; i++) {
                        for (let n =0;n<gameBird.length;n++) {
                            if (gameBird.charAt(n) === guess) {
                                let newhiddenWord = hiddenWord.replace(" _ ", guess);
                                document.getElementById("currentWord").innerHTML = newhiddenWord;    
                            }
                        // if (gameBird.charAt(n) === guess) {
                        //     let newhiddenWord = hiddenWord.replace(" _ ", guess);
                        //     document.getElementById("currentWord").innerHTML = newhiddenWord;
                        //     n++;
                        // } else {
                        //     n++;
                        // };
                    };
                } else {
                    wrongGuesses.push(guess);
                    document.getElementById("guesses").innerHTML = wrongGuesses.join();
                    guessesRem = guessesRem - 1;
                    document.getElementById("guessesRem").innerHTML = guessesRem;
                };
                if (guessesRem === 0) {
                    alert("End of Game");
                    return;
                }
            };
        }
    }
}

//calls
wordGuessGame.init();
//document.getElementById("wins").innerHTML = wins;
wordGuessGame.play();
//wordGuessGame.reset();
// window.onload = function() {
//     //run js code here
// }
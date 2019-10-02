// JavaScript source code

//global variables
let birds = ["hawk", "cardinal", "dove", "osprey", "bluejay", "finch", "bald eagle","heron","egret"];  //array of bird names
let gameBird = birds[Math.floor(Math.random() * birds.length)]; //name of bird selected randomly from array
let guessesRem = (gameBird.length + gameBird.length*.75);  //set number of guesses as twice the length of bird name i.e. bird.length*2
guessesRem = Math.round(guessesRem);
let wrongGuesses = []; //array of wrong guesses for displaying
// let rightGuesses = [];  //array of correct guesses for display.  length set when gameBird set
let rightGuesses = "";  //array of correct guesses for display.  length set when gameBird set

let wins = 0;  //number of wins for display

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
        // wins = guessesRem = wrongGuesses = 0;
        // gameBird = birds[Math.floor(Math.random() * birds.length)];
        // guessesAvail = guessesRem = gameBird.length * 2;
        alert(gameBird);
        alert(gameBird.length);
        alert(guessesRem);
        for (let i=0; i< gameBird.length;i++) {
            rightGuesses = rightGuesses + "_ ";
        };
        document.getElementById("currentWord").innerHTML = rightGuesses;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessesRem").innerHTML = guessesRem;
    },
    //reset: function () {
    //    wins, guessesAvail, guessesRem, wrongGuesses = 0;
    //},
    play: function () {

        document.onkeyup = function(event) {
           let guess = event.key;
           alert(guess);
        //    echoText.textContent = guess;
        //     };
            //check to see if guessed letter is in the gameBird string
            // var char = gameBird.includes(guess);
            // alert(char);
             if (gameBird.includes(guess)) {
                 alert("correct guess");
                 echoText.textContent = guess;

             } else {
                 alert("try again");
                 echoText.textContent = guess;
             };



            //if gameBird.includes(guess) {
            //    alert("you guessed right!";
            //} else {
            //    alert("Try again!");
            //};

        guessesRem = document.getElementById("guessesRem").innerHTML;
        }

        //let guess = document.getElementById("guess");
        ////guess.value = guess.value.toUpperCase();
        //let goodGuess = gameBird.includes(guess);
        //if goodGuess in gameBird {
        //    guess = wrongGuesses.pop.guess;
        //    guessesRem = guessesRem - 1;
        //    };

        
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
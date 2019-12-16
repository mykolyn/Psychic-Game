var won = 0
var lost = 0
var attempts = 10
var usedArray = []
var ranLetter = ranLetter
var letters = "abcdefghijklmnoqrstuvwxyz"

/**Notes need to revise code so that computer guess doesnt keep changing when the player makes a guess
 * 
 * 
 * 
 * 
 * 
 * 
 * **/

//computer generates random letter and stores into ranLetter
function compGuess() {
     ranLetter = letters[Math.floor(Math.random() * letters.length)];     
     return ranLetter
 }
 console.log("below is computers guess----")
 console.log(compGuess())

/* setting random letter to var */
//ranLetter = letters[Math.floor(Math.random() * letters.length)];
  


//take in user input and compare user input with computer's ranLetter
document.onkeyup = function (event) {
    //store user input into playerGuess
    var playerGuess = event.key;
    console.log(playerGuess)

    //if player guesses letter correctly, reset: add 1 to won, set attempts to 10, clear usedArray
    if (playerGuess === ranLetter) {
        won++;
        attempts = 10;
        usedArray = [];
        alert ("you won")
    }

    //call function to create random letter

    //compGuess();
    console.log("guess should be same----")
    console.log(ranLetter)

    //compare user input and computer
    //if guessed wrong, take away 1 from attempts
    if (playerGuess !== compGuess) {
        attempts--;
    }
    //if attempt reaches 0, reset
    if (attempts === 0) {
        lost++;
        attempts = 10;
        usedArray = [];
        alert("you lost :(")
    }
    document.getElementById("attempts").innerHTML = attempts;

    //Used letters
    if (usedArray.indexOf(playerGuess) >= 0) {
    }
    else {
        usedArray.push(playerGuess);
        document.getElementById("playerGuess").innerHTML = usedArray;
    }

    document.getElementById("wins").innerHTML = won;
    document.getElementById("losses").innerHTML = lost;

}
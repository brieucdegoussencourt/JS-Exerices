// This script was created tks to this tutorial: https://www.youtube.com/watch?v=ugV5c3xRtrc

// selecting elements from the page (variables)
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

//Initializing the game variables
let currentWord, correctLetters, wrongGuessCount
const maxGuesses = 6;

// Function to reset game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src= "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    // create the empty letter slots
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("")

    //enable keyboard buttons
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);

    // Hide the game modal
    gameModal.classList.remove("show");

}

//function to get a random word and set up the game
const getRandomWord = () => {
    //picking a random word and hint from your wordList array
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    //set the current word and update the hint
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    //call reset game
    resetGame();
}

//function to handle the end of game window
const gameOver = (isVictory) => {
    //show the game over modal with win or loss
    const modalText = isVictory ? `You found the word:` : "The Correct word was:";
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}<b>`;
    gameModal.classList.add("show");
}

//Creating a for loop to diplay our keyboard button
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    // adding a click event listener for each button
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

//Function to handle the game logic when a letter is clicked
const initGame = (button, clickedLetter) => {
    //checking if the clicked letter is in the currentWord
    if (currentWord.includes(clickedLetter)) {
        //update the displayed letters if click is correct
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        //update wrong guess count and hangman image if letter guess is incorrect
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    //disable the clicked button so it can't be clicked again
    button.disabled = true;
    //update the displayed guess count
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    //check if the game shoudl end based on win or lose conditions
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}


//Starting the game witha random word
getRandomWord();

//add event listener for the play again button
playAgainBtn.addEventListener("click", getRandomWord)

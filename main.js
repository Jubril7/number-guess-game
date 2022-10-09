let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;
// guessField.focus();

function checkGuess(){
  const userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = "Previous guesses: "
  }
  guesses.textContent += ` ${userGuess}`;
  
  if(userGuess === randomNumber){
    lastResult.textContent = "Congratulation, You're right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  }else if(guessCount === 10){
    lastResult.textContent = "!!!GAME OVER";
    lowOrHi.textContent = "";
  }else{
    lastResult.textContent = "!!WRONG";
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber){
      lowOrHi.textContent = "Last guess was too low";
      lowOrHi.style.color = "red";
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = "Last guess was too high";
      lowOrHi.style.color = "cyan"
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
  
  
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Enjoyed it? Start a new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);

}

function resetGame(){
    guessCount === 1;
    const resulParas = document.querySelectorAll(".resultParas p");
        for(const resultPara of resulParas){
            resultPara.textContent = "";
        }
        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();

        lastResult.style.backgroundColor = "white";

        randomNumber = Math.floor(Math.random() * 100) + 1;
}







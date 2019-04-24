let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
	let userGuess = Number(guessField.value);
	if(guessCount===1){
		guesses.textContent='Previous Guesses: ';
	}
	guesses.textContent += userGuess + ' ';
	
	
	if(randomNumber===userGuess){
		lastResult.textContent='You got it';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
	}
	else if (guessCount === 10) {
		lastResult.textContent = '!!!GAME OVER!!!';
	}
	else{
		lastResult.textContent="Wrong! Try Again";
		lastResult.style.backgroundColor='red';
		if(userGuess > randomNumber){
			lowOrHi.textContent="You are gone too high";
		}
		else if(userGuess < randomNumber){
			lowOrHi.textContent="You are too low";
		}
	}
	
	guessCount++;
	guessField.value='';
	guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);

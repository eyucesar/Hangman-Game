	//an array for computer's choices.
	var computerChoices = ["CURLING", "ARCHERY", "PENTATHLON", "TRAMPOLINE", "BOBSLEIGH", "BADMINTON", "FENCING", "TAEKWONDO", "SPEED SKATING", "BEACH VOLLEYBALL"];
	//this is where I will track the wins
	var wins = 0;
	//variable that tracks the guess left. I start the game with 10 guesses.
	var guessesLeft = 10;
	//variable to hold the guessed letters. I start it empty, bc the user didn't press any keys yet.
	var guessesSoFar = [];
	var guessesVar;
	var wordUnderscore = "";
	//variable to hold the word the computer picks
	var currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	//Here I replace the chaarcters in the current word with underscores to hide the word.
	var wordUnderscore = currentWord.replace(/[A-Z]/g, "_ ");
	console.log(wordUnderscore);
	//here I loop through the word to change the characters to underscores.
	/*for (i = 0; i < currentWord.length; i++) {
			currentWord.charAt(i) = "_";
			console.log(currentWord);
		}
	//var currentWordUnd = currentWord.replace("_");*/
	//writing the current word to the screen before the user starts playing the game. I need to find a way to hide the characters with underscores.
	document.getElementById("currentWord").innerHTML = wordUnderscore;
	//here my functions starts when the user releases the keys
	document.onkeyup = function(event) {
        //user presses a key and I convert into a lower case letter and assing the value to userGuess variable.
    	var userGuess = event.key.toUpperCase();

        //testing the values of variables to see whether my code works so far
        console.log("computer guess: " + currentWord);
        console.log("user guess: " + userGuess);
        console.log(currentWord.indexOf(userGuess));
        
        if (currentWord.indexOf(userGuess) > -1) {
        	alert("You guessed a letter!");
        	//I need to replace the guesses letter with the underscores... wordUnderscore = 
        	//I need to add a statement that will increase the wins once the word is guessed. 
        } else {
        	guessesLeft--;
        	guessesSoFar.push(userGuess);
        	alert("That's the wrong letter");
        	if (guessesLeft === 0) {
	            alert("You lost! Seems like you are not a very good psychic after all :)");
	            guessesLeft = 10;
	            //here I empty the elements inside the array to start the game again.
	            guessesSoFar = [];
	            //after the execution of each if statement, computer picks another letter randomly.
	            currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	           }
        }

        guessesVar = document.getElementById("theGuesses");
        guessesVar.innerHTML = guessesSoFar;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;


    };
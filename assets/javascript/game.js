    //an array for computer's choices.
    var computerChoices = ["CURLING", "ARCHERY", "PENTATHLON", "TRAMPOLINE", "BOBSLEIGH", "BADMINTON", "FENCING", "TAEKWONDO", "SNOWBOARD", "SKELETON", "LUGE", "WEIGHTLIFTING"];
    //this is where I will track the wins
    var wins = 0;
    //variable that tracks the guess left. I start the game with 10 guesses.
    var guessesLeft = 10;
    //variable to hold the guessed letters. I start it empty, bc the user didn't press any keys yet.
    var guessesSoFar = [];
    var guessesVar;
    var wordHidden = "";
    //variable to hold the word the computer picks
    var currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //Here I replace the chaarcters in the current word with underscores to hide the word.
    var wordHidden = currentWord.replace(/[A-Z]/g, "_ ");
    console.log(wordHidden);
    //I am writing the word to the screen after hiding the letters with underscores.
    document.getElementById("currentWord").innerHTML = wordHidden;
    //here my functions starts when the user releases the keys
    document.onkeyup = function(event) {
        //user presses a key and I convert into a lower case letter and assing the value to userGuess variable.
        var userGuess = event.key.toUpperCase();
        //testing the values of variables to see whether my code works so far
        console.log("computer guess: " + currentWord);
        console.log("user guess: " + userGuess);
        console.log(currentWord.indexOf(userGuess));
        
        if (currentWord.indexOf(userGuess) > -1) {
            //new Audio('http://www.websites-graphics1.de/songs/wavs/1wav_geraeuche/JUBEL.WAV').play()
            alert("You guessed a letter. Almost there!");
            var wordHidden = wordHidden.replace("_", userGuess);
            document.getElementById("currentWord").innerHTML = wordHidden;
                if (wordHidden.indexOf("_") < -1) {
                    alert("Yay, you wond a gold medal!");
                    wins++;
                    guessesLeft = 10;
                    guessesSoFar = [];
                    currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    wordHidden = wordHidden.replace("_", userGuess);
                    document.getElementById("currentWord").innerHTML = wordHidden;
                }
            //I need to add a statement that will increase the wins once the word is guessed. 
            //And I need add a statement which will display an image on the screen if the user guesses the word.
        } else {
            guessesLeft--;
            guessesSoFar.push(userGuess);
            //new Audio('http://www.websites-graphics1.de/songs/wavs/1wav_geraeuche/Boo.wav').play()
            alert("This letter is not found in the word. Keep trying!");
            if (guessesLeft === 0) {
                alert("You lost. Thankfully you have plenty of time to study before the next Olympics!");
                guessesLeft = 10;
                //here I empty the elements inside the array to start the game again.
                guessesSoFar = [];
                //after the execution of each if statement, computer picks another word randomly.
                currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                var wordHidden = currentWord.replace(/[A-Z]/g, "_ ");
            }
        }

        guessesVar = document.getElementById("theGuesses");
        guessesVar.innerHTML = guessesSoFar;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = wins;

    };

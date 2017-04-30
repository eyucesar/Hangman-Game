//an array for computer's choices.
var computerChoices = ["CURLING", "ARCHERY", "PENTATHLON", "TRAMPOLINE", "BOBSLEIGH", "BADMINTON", "FENCING", "TAEKWONDO", "SNOWBOARD", "SKELETON", "LUGE", "WEIGHTLIFTING", "EQUESTRIAN", "HOCKEY", "TRIATHLON", "WRESTLING", "BIATLON", "RUGBY", "HANDBALL", "JUDO", "DIVING"];
//variable to hold the user guess.
var userGuess;
//this is where I will track the wins/gold medals.
var wins = 0;
//variable that tracks the guess left. I start the game with 10 guesses.
var guessesLeft = 10;
//variable to hold the guessed letters. I start it empty, bc the user didn't press any keys yet.
var guessesSoFar = [];
//variable to keyboard letters so that the user cannot use other keyboard elements
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "X", "Z"];
//randomly picking a word from the computer choices array
var currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//Here I replace the characters in the current word with underscores to hide the word.
var wordHidden = currentWord.split("").map(function(){return "_"});
//trying to replace the commas with spaces
//var wordHiddenJoin = wordHidden.join(' ');
console.log(wordHidden);
//I am writing the word to the screen after hiding the letters with underscores.
document.getElementById("currentWord").innerHTML = wordHidden;
//here my function starts when the user releases the keys

document.onkeyup = function(event) {
    //user presses a key and I convert into a lower case letter and assing the value to userGuess variable.
    var userGuess = event.key.toUpperCase();
    //testing the values of variables to see whether my code works so far
    //console.log("computer guess: " + currentWord);
    //console.log("user guess: " + userGuess);
    //console.log(currentWord.indexOf(userGuess));
    var indexNum = currentWord.indexOf(userGuess, indexNum + 1);
    //only the letters will be used by the user, game won't work if the user presses other keyboard elements
    if (letters.indexOf(userGuess) > -1) {
        if (currentWord.indexOf(userGuess) === -1) {
            if (guessesSoFar.indexOf(userGuess) === -1) {
                guessesSoFar.push(userGuess);
                guessesLeft--;
            }
            new Audio('http://psychic3d.free.fr/extra_fichiers/sons/foule_contente.wav').play()
            //alert("This letter is not found in the word. Keep trying!");
            if (guessesLeft === 0) {
                alert("You lost. Thankfully you have plenty of time to study before the next Olympics!");
                document.getElementById("openingImg").src = "assets/images/ol-sports.jpg";
                guessesLeft = 10;
                //here I empty the elements inside the array to start the game again.
                guessesSoFar = [];
                //after the execution of each if statement, computer picks another word randomly.
                currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                wordHidden = currentWord.split("").map(function(){return "_"});
                document.getElementById("currentWord").innerHTML = wordHidden;
            }
        } 
        
        while (indexNum > -1) {
            new Audio('http://www.websites-graphics1.de/songs/wavs/1wav_geraeuche/JUBEL.WAV').play()
            //alert("You guessed a letter. Keep going!");
            //variable to hold the index number of the user guessed letter
            wordHidden[indexNum] = userGuess;
            indexNum = currentWord.indexOf(userGuess, indexNum + 1);
            document.getElementById("currentWord").innerHTML = wordHidden;
            //console.log(wordHidden);
            if (wordHidden.indexOf("_") === -1) {
                wordHidden[indexNum] = userGuess;
                alert("Yay, you won a gold medal!");
                //here I dynamically change the image div once the user guesses the letter correctly. 
                if (currentWord === "ARCHERY") {
                    document.getElementById("openingImg").src = "assets/images/archery.jpg";
                }
                if (currentWord === "CURLING") {
                    document.getElementById("openingImg").src = "assets/images/curling.jpg";
                }
                if (currentWord === "PENTATHLON") {
                    document.getElementById("openingImg").src = "assets/images/pentathlon.jpg";
                }
                if (currentWord === "TRAMPOLINE") {
                    document.getElementById("openingImg").src = "assets/images/trampoline.jpg";
                }
                if (currentWord === "BOBSLEIGH") {
                    document.getElementById("openingImg").src = "assets/images/bobsleigh.jpg";
                }
                if (currentWord === "BADMINTON") {
                    document.getElementById("openingImg").src = "assets/images/badminton.jpg";
                }
                if (currentWord === "FENCING") {
                    document.getElementById("openingImg").src = "assets/images/fencing.jpg";
                }
                if (currentWord === "TAEKWONDO") {
                    document.getElementById("openingImg").src = "assets/images/taekwondo.jpg";
                }
                if (currentWord === "SNOWBOARD") {
                    document.getElementById("openingImg").src = "assets/images/snowboard.jpg";
                }
                if (currentWord === "SKELETON") {
                    document.getElementById("openingImg").src = "assets/images/skeleton.jpg";
                }
                if (currentWord === "LUGE") {
                    document.getElementById("openingImg").src = "assets/images/luge.jpg";
                }
                if (currentWord === "WEIGHTLIFTING") {
                    document.getElementById("openingImg").src = "assets/images/weightlifting.jpg";
                }
                 if (currentWord === "EQUESTRIAN") {
                    document.getElementById("openingImg").src = "assets/images/equestrian.jpg";
                }
                 if (currentWord === "HOCKEY") {
                    document.getElementById("openingImg").src = "assets/images/hockey.jpg";
                }
                 if (currentWord === "TRIATHLON") {
                    document.getElementById("openingImg").src = "assets/images/triathlon.jpg";
                }
                 if (currentWord === "WRESTLING") {
                    document.getElementById("openingImg").src = "assets/images/wrestling.jpg";
                }
                 if (currentWord === "BIATLON") {
                    document.getElementById("openingImg").src = "assets/images/biathlon.jpg";
                }
                 if (currentWord === "RUGBY") {
                    document.getElementById("openingImg").src = "assets/images/rugby.jpg";
                }
                 if (currentWord === "HANDBALL") {
                    document.getElementById("openingImg").src = "assets/images/handball.jpg";
                }
                 if (currentWord === "JUDO") {
                    document.getElementById("openingImg").src = "assets/images/judo.jpg";
                }
                 if (currentWord === "DIVING") {
                    document.getElementById("openingImg").src = "assets/images/diving.jpg";
                }
                guessesSoFar = [];
                guessesLeft = 10;
                wins++;
                currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                wordHidden = currentWord.split("").map(function(){return "_"});
                document.getElementById("currentWord").innerHTML = wordHidden;
            }
        }
    }

    //finally I write the wins, the guesses counter and the guessed letters to the screen.
    document.getElementById("theGuesses").innerHTML = guessesSoFar;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = wins;

};
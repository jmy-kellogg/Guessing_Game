$(document).ready(function(){
	//alert("Let's Play!");
  var playersGuess;
  var winningNumber;
  var numberOfGuesses = 1;

  function setPlayerMessage (message){
      $('.message').text(message);
  };

  function generateWinningNumber(){
    winningNumber = Math.floor((Math.random() * 100) + 1);
    setPlayerMessage("I'm thinking of a number between 0 and 100...")
  };

  generateWinningNumber();

  function playersGuessSubmission(){
      playersGuess = document.getElementById('guess').value;
  };



  function lowerOrHigher(){

    if(Math.abs(winningNumber - playersGuess) >= 80){
      setPlayerMessage("You're Freezing")
    }else if(Math.abs(winningNumber - playersGuess) >= 70){
        setPlayerMessage("You're Very Cold");
    }else if(Math.abs(winningNumber - playersGuess) >= 60){
      setPlayerMessage("You're Cold")
    }
    else if(Math.abs(winningNumber - playersGuess) >= 50){
      setPlayerMessage("You're Cool")
    }
    else if (Math.abs(winningNumber - playersGuess) >= 40) {
      setPlayerMessage("You're Warm-ish");
    }
    else if (Math.abs(winningNumber - playersGuess) >= 30) {
      setPlayerMessage("You're Warm");
    }
    else if (Math.abs(winningNumber - playersGuess) >= 20) {
      setPlayerMessage("You're Heating up!");
    }
    else if (Math.abs(winningNumber - playersGuess) >= 10) {
      setPlayerMessage("You're Hot");
    }
    else if (Math.abs(winningNumber - playersGuess) >= 5) {
      setPlayerMessage("You're Supper Hot");
    }
    else{
      setPlayerMessage("You're On Fire!");
    }
  }

  function checkGuess(){
    if(winningNumber == playersGuess){
      setPlayerMessage('Yes! You are correct my friend');
    }else{
      if(numberOfGuesses < 5){
        lowerOrHigher();
        numberOfGuesses ++;
      }else if(numberOfGuesses > 5) {
          playAgain();
      }else{
        setPlayerMessage("Oops ran out of Guesses");
      }
    }
  }

  function provideHint(){
  	playersGuessSubmission();
    if(winningNumber < playersGuess){
      setPlayerMessage("Lower!");
    }else if(winningNumber > playersGuess){
      setPlayerMessage("Higher!");
    }else {
      setPlayerMessage("You got it. Click Start Over to play again!")
    }
  }
  function playAgain(){
    	// add code here
      generateWinningNumber();
      numberOfGuesses = 0;
      setPlayerMessage ("I've thought of a new number");
    }

//submit button
    $('.submitGuess').on('click', function() {
        playersGuessSubmission();
        checkGuess();
    });

//Hint Button
  $('.hint').on('click', function(){
      provideHint();
    })

//startOver Button
    $('.startOver').on('click', function(){
      playAgain();
    })

//return key
$('#guess').keyup( function(event){
  if (event.keyCode == 13 || event.which == 13){
    event.preventDefault();
    playersGuessSubmission();
    checkGuess();
  }
});

});

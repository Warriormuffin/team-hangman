function GameController() {
  var gameService = new GameService()

  var statArr = ['rope', 'head', 'torso', 'waist', 'body', 'fullbody', 'redeyes']


  // Grabs the guess from the user
  this.userGuess = function (e) {
    e.preventDefault()
    var form = e.target.letter.value
    //sends the guess to the game service
    gameService.userGuess(form, draw)
    e.target.letter.value = ""
    // document.getElementById('letter').reset()


    //user guess will be returning game obj for processing/drawing
  }

  this.newGame = function () {
    document.getElementById('picture').innerHTML = ''
    gameService.newGame(draw)

  }



  //draws to the page
  function draw(arrLetters, wordArr, incorrectGuesses) {
    if (gameService.endGame()) {
      drawEndGame()
      return
    }
    let word = wordArr.join(' ')
    document.getElementById('picture').className = statArr[incorrectGuesses]
    var elemLetters = document.getElementById("letters-guessed")
    var elemGuess = document.getElementById('counter').innerHTML = arrLetters.length
    var elemWord = document.getElementById('word').innerHTML = `<h1>${word}</h1>`
    templateLetters = '';
    for (var i = 0; i < arrLetters.length; i++) {
      var letter = arrLetters[i];
      templateLetters += `
            <h6>${letter}</h6>`

    }
    elemLetters.innerHTML = templateLetters;
  }

  function drawEndGame() {
    var template = ''
    var elem = document.getElementById('picture')
    template += `
            <div>
                <h1 class="game-over" id="game-over">GAME OVER</h1>
            </div>
        `
      elem.innerHTML = template
  }

}
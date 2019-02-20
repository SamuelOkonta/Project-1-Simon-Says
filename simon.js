
let playerChoice = []
let gameChoice = []
let score = 0;
let highscore = 0;
let audio = new Audio("Audio/bat.mp3")
let audio2 = new Audio("Audio/gunup.mp3")
let audio3 = new Audio("Audio/Track 25.mp3")
let audio4 = new Audio("Audio/w_pkup.mp3")
let ScoreBoard = $('#score').text()

$(document).ready(function () {




    function checkArray(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                
            }
            
        }

    }
    $('.red').on('click', function () {
        $(".red").fadeOut()
        audio.play()
        console.log('play sound')
        $(".red").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            playerChoice = []
            setTimeout(() => {
                randomColor()
                score ++
                $('#score').text(`CURRENT SCORE = ${score}`)
                if (score > highscore) {
                    highscore = score
                $('#highscore').text(`HIGH SCORE = ${highscore}`) 
                }
                console.log('made it here')
            }, 1000)
        }
        else {
            for( i = 0 ; i < playerChoice.length; i++) {
               if (gameChoice(i) !== playerChoice(i)) {
               alert('Gamer Over!')
                gameChoice = []
                playerChoice = []
               }   
            }
        }
        

    }

    )
    $('.yellow').on('click', function () {
        $(".yellow").fadeOut()
        audio2.play()
        $(".yellow").fadeIn()
        playerChoice.push(2)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            playerChoice = []
            setTimeout(() => {
                randomColor()
                score ++
                $('#score').text(`CURRENT SCORE = ${score}`)
                if (score > highscore) {
                    highscore = score
                $('#highscore').text(`HIGH SCORE = ${highscore}`) 
                }
            }, 1000)
        }
        else {
            for( i = 0 ; i < playerChoice.length; i++) {
               if (gameChoice(i) !== playerChoice(i)) {
               alert('Gamer Over!')
                gameChoice = []
                playerChoice = []
               }   
            }
        }
    })
    


    
    $('.green').on('click', function () {
        $(".green").fadeOut()
        audio3.play()
        $(".green").fadeIn()
        playerChoice.push(4)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            playerChoice = []
            setTimeout(() => {
                randomColor()
                score ++
                $('#score').text(`CURRENT SCORE = ${score}`)
                if (score > highscore) {
                    highscore = score
                $('#highscore').text(`HIGH SCORE = ${highscore}`) 
                }
            }, 1000)
        }
        else {
            for( i = 0 ; i < playerChoice.length; i++) {
               if (gameChoice(i) !== playerChoice(i)) {
               alert('Gamer Over!')
                gameChoice = []
                playerChoice = []
               }   
            }
            }
        })
    

    
    $('.blue').on('click', function () {
        $(".blue").fadeOut()
        audio4.play()
        $(".blue").fadeIn()
        playerChoice.push(3)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            playerChoice = []
            setTimeout(() => {
                randomColor()
                score ++
                $('#score').text(`CURRENT SCORE = ${score}`)
                if (score > highscore) {
                    highscore = score
                    $('#highscore').text(`HIGH SCORE = ${highscore}`) 
                }
            }, 1000)
        }
        else {
            for( i = 0 ; i < playerChoice.length; i++) {
               if (gameChoice(i) !== playerChoice(i)) {
               alert('Gamer Over!')
                gameChoice = []
                playerChoice = []
               }   
                
            }
        }
    })
    
    



    function randomColor() {
        num = Math.floor((Math.random() * 4) + 1)
        gameChoice.push(num);
        console.log(gameChoice)
        console.log(num, 'rand')
        let i = 0
        for (let i = 0; i < gameChoice.length; i++) {
            setTimeout(function () {
                if (gameChoice[i] == 1) {
                    $(".red").fadeOut()
                    $(".red").fadeIn()
                } else if (gameChoice[i] == 2) {
                    $(".yellow").fadeOut()
                    $(".yellow").fadeIn()
                } else if (gameChoice[i] == 3) {
                    $(".blue").fadeOut()
                    $(".blue").fadeIn()
                } else if (gameChoice[i] == 4) {
                    $(".green").fadeOut()
                    $(".green").fadeIn()
                }

            }, 1000 * i)
        }

    }


    $('#Start').on('click', function () {
        randomColor()
    })





})

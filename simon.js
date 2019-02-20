
let playerChoice = []
let gameChoice = []
let num;
// let notRun
// let round
// let gamePlay
$(document).ready(function () {
    // document.querySelector(".red").toggle("scale");
    // document.querySelector(".yellow").toggle("scale");
    // document.querySelector(".green").toggle("scale");
    // document.querySelector(".blue").toggle("scale")
    // function randCheck(container){
    //     // select random input and check it
    //     $(container+' .checked').removeClass('checked');
    //     $(container+' :radio:eq('+Math.round(Math.random()*($(container+' input:radio').length-1))+')').attr('checked','checked').addClass('checked');

    //     displayResult(container);




    function checkArray(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                console.log('do not match')
                return
            }
        }

    }

    // function notRun (){
    //     if (playerChoice !== game)
    // }




    $('.red').on('click', function () {
        $(".red").fadeOut()
        $(".red").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            console.log('you did it')
            setTimeout(() => {
                randomColor()
            }, 1000)
        } else {
            console.log('incorrect')
        }
    }

    )
    $('.yellow').on('click', function () {
        $(".yellow").fadeOut()
        $(".yellow").fadeIn()
        playerChoice.push(2)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            console.log('you did it')
            setTimeout(() => {
                randomColor()
            }, 1000)
        } else {
            console.log('incorrect')
        }
    }

    )
    $('.green').on('click', function () {
        $(".green").fadeOut()
        $(".green").fadeIn()
        playerChoice.push(4)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            console.log('you did it')
            setTimeout(() => {
                randomColor()
            }, 1000)
        } else {
            console.log('incorrect')
        }
    }

    )
    $('.blue').on('click', function () {
        $(".blue").fadeOut()
        $(".blue").fadeIn()
        playerChoice.push(3)
        console.log(playerChoice, "my choice")
        if (playerChoice.length === gameChoice.length) {
            checkArray(playerChoice, gameChoice)
            console.log('you did it')
            setTimeout(() => {
                randomColor()
            }, 1000)
        } else {
            console.log('incorrect')
        }
    }

    )

    // setTimeout and setInterval

    // function randomNum() {
    //     randomColor()
    //     for (let i = 0; i < 1; i++) {
    //         if (num == 1) {
    //             $(".red").fadeOut()
    //             $(".red").fadeIn()
    //         } else if (num == 2) {
    //             $(".yellow").fadeOut()
    //             $(".yellow").fadeIn()
    //         } else if (num == 3) {
    //             $(".blue").fadeOut()
    //             $(".blue").fadeIn()
    //         } else if (num == 4) {
    //             $(".green").fadeOut()
    //             $(".green").fadeIn()
    //         }
    //     }
    // }

    function randomColor() {
        num = Math.floor((Math.random() * 4) + 1)
        gameChoice.push(num);
        console.log(gameChoice)
        console.log(num, 'rand')

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

            },500 * i) 
        // for( let i = 0 < gameChoice.length; i++) {

        // }
        }
    }
        $('#Start').on('click', function () {
            randomColor()
        })

        // function notRun(){
        //     if(playerChoice !== gameChoice)

        // console.log(gameChoice)
        // console.log(playerChoice)


        // if(num == 1){
        //     $(".red").fadeOut()
        //     $(".red").fadeIn()
        // } else if(num == 2){
        //     $(".yellow").fadeOut()
        //     $(".yellow").fadeIn()
        // } else if(num ==3){
        //     $(".blue").fadeOut()
        //     $(".blue").fadeIn()
        // } else if(num == 4){
        //     $(".green").fadeOut()
        //     $(".green").fadeIn()
        // }}



        // newRandomNum = () => {
        //     let num = Math.floor((Math.random() * 4) + 1)
        //     console.log(num)
        //     gameChoice.push(num)
        //     console.log(gameChoice)
        //     console.log(playerChoice)


        //     if(num == 1){
        //         $(".red").fadeOut()
        //         $(".red").fadeIn()
        //     } else if(num == 2){
        //         $(".yellow").fadeOut()
        //         $(".yellow").fadeIn()
        //     } else if(num ==3){
        //         $(".blue").fadeOut()
        //         $(".blue").fadeIn()
        //     } else if(num == 4){
        //         $(".green").fadeOut()
        //         $(".green").fadeIn()
        //     }

        // }



    })

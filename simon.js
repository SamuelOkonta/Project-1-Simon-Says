$(document).ready(function(){
    // document.querySelector(".red").toggle("scale");
    // document.querySelector(".yellow").toggle("scale");
    // document.querySelector(".green").toggle("scale");
    // document.querySelector(".blue").toggle("scale")
    // function randCheck(container){
    //     // select random input and check it
    //     $(container+' .checked').removeClass('checked');
    //     $(container+' :radio:eq('+Math.round(Math.random()*($(container+' input:radio').length-1))+')').attr('checked','checked').addClass('checked');
    
    //     displayResult(container);
    



    let gameChoice = []
    let playerChoice = []


    $('.red').on('click', function(){
        $(".red").fadeOut()
        $(".red").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice)
        if(playerChoice[0] == gameChoice[0]) {
            console.log('you did it')
        } else {
            console.log('incorrect')
        }
    })
    $('.yellow').on('click', function(){
        $(".yellow").fadeOut()
        $(".yellow").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice)
        if(playerChoice[0] == gameChoice[0]) {
            console.log('you did it')
        } else {
            console.log('incorrect')
        }
    })
    })
    $('.green').on('click', function(){
        $(".green").fadeOut()
        $(".green").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice)
        if(playerChoice[0] == gameChoice[0]) {
            console.log('you did it')
        } else {
            console.log('incorrect')
        }
    })
    $('.blue').on('click', function(){
        $(".blue").fadeOut()
        $(".blue").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice)
        if(playerChoice[0] == gameChoice[0]) {
            console.log('you did it')
        } else {
            console.log('incorrect')
        }
    })


    randomNum = () => {
        let num = Math.floor(Math.random() * 4) + 1 
        console.log(num)
        gameChoice.push(num)
        console.log(gameChoice)
        console.log(playerChoice)
        if(num == 1){
            $(".red").fadeOut()
            $(".red").fadeIn()
        } else if(num == 2){
            $(".yellow").fadeOut()
            $(".yellow").fadeIn()
        } else if(num ==3){
            $(".blue").fadeOut()
            $(".blue").fadeIn()
        } else if(num == 4){
            $(".green").fadeOut()
            $(".green").fadeIn()
        }
    }

    

})

// var container = ["red", "yellow", "blue", "green" ]; 
// var randomNumber = Math.random(); 
// var randomWholeNumber = Math.floor(randomNumber * wordBank.length); 
// var randomArrayWord = wordBank[randomWholeNumber];

// Event Listeners

// var eventClick = document.getElementById( eventClick ).addEventListener( click , function()
// { Swal.fire({
//     title: 'Are you sure?',
//     text: "There's no turning back now!",
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, Game Start!'
//   }).then((result) => {
//     if (result.value) {
//       Swal.fire(
//         'confirmed!',
//         'Your game has started.',
//         'success'
//       )
//     }
//   })
//   });


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
    
$('#eventClick').on('click' , function() {
    randomNum()
})


    let gameChoice = []
    let playerChoice = []
    let num;
    let i = 0
    


    $('.red').on('click', function(){
        $(".red").fadeOut()
        $(".red").fadeIn()
        playerChoice.push(1)
        console.log(playerChoice)
        if(playerChoice[i] == gameChoice[i]) {
            console.log('you did it')
            
        } else {
            console.log('incorrect')
        }
    })
    $('.yellow').on('click', function(){
        $(".yellow").fadeOut()
        $(".yellow").fadeIn()
        playerChoice.push(2)
        console.log(playerChoice)
        if(playerChoice[i] == gameChoice[i]) {
            console.log('you did it')
            
        } else {
            console.log('incorrect')
        }
    })
    $('.green').on('click', function(){
        $(".green").fadeOut()
        $(".green").fadeIn()
        playerChoice.push(4)
        console.log(playerChoice)
        if(playerChoice[i] == gameChoice[i]) {
            console.log('you did it')
            
        } else {
            console.log('incorrect')
        }
    })
    $('.blue').on('click', function(){
        $(".blue").fadeOut()
        $(".blue").fadeIn()
        playerChoice.push(3)
        console.log(playerChoice)
        if(playerChoice[i] == gameChoice[i]) {
            console.log('you did it')
            
        } else {
            console.log('incorrect')
        }
    })


    function randomNum(){
        
            for(let i = 0; i < 20; i++) {
              num = Math.floor((Math.random() * 4) + 1)
              gameChoice.push(num);
              console.log(num)
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
            }}
            }
            
        
       
        console.log(gameChoice)
        console.log(playerChoice)

        
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

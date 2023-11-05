'use strict';


// document.querySelector('.message').textContent=" 🎉 Correct Number";      changing textcontent inside the class.
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;
*/

let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function(){
   const guess=Number(document.querySelector('.guess').value);  //always it return string value even if we enter number ...so we have to convert it into number.


// when there is no input.
if(!guess){
    // document.querySelector('.message').textContent=" 🛑No number!";
    displayMessage('🛑No number!');
}

// when palyer wins
else if(guess===secretnumber){

    // document.querySelector('.message').textContent=" 🎉 Correct Number";
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent=secretnumber;

   document.querySelector('body').style.backgroundColor='#60b347';

   document.querySelector('.number').style.width='30rem';
    
   if(score>highScore){
    highScore=score;
    document.querySelector('.highscore').textContent=highScore;
   }
}

// when the guess is wrong
else if(guess!=secretnumber){
    if(score>1){
        // document.querySelector('.message').textContent=guess>secretnumber?" Too High!" :" Too Low!" ;
        displayMessage(guess>secretnumber?" Too High!" :" Too Low!");

        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            // document.querySelector('.message').textContent="😕 You Lost the Game!";
            displayMessage("😕 You Lost the Game!");
            document.querySelector('.score').textContent=0;
        }
}

// // when guess is too high
// else if(guess>secretnumber){

//     if(score>1){
//     document.querySelector('.message').textContent=" Too High!";
//     score--;
//     document.querySelector('.score').textContent=score;
//     }
//     else{
//         document.querySelector('.message').textContent="😕 You Lost the Game!";
//         document.querySelector('.score').textContent=0;
//     }
// }


// // when guess is too low
// else if(guess<secretnumber){

//     if(score>1){
//         document.querySelector('.message').textContent=" Too Low!";
//         score--;
//         document.querySelector('.score').textContent=score;
//     }
//     else{
//     document.querySelector('.message').textContent=" 😕 You lost the game!";
//     document.querySelector('.score').textContent=0;
//     }
    
// }

});


document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretnumber=secretnumber=Math.trunc(Math.random()*20)+1;

//   document.querySelector('.message').textContent="Start guessing...";

  displayMessage("Start guessing...");
  
  document.querySelector('.number').textContent="?";
  document.querySelector('.score').textContent=score;
  document.querySelector('.guess').value='';

  document.querySelector('body').style.backgroundColor='#222';

   document.querySelector('.number').style.width='15rem';

});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
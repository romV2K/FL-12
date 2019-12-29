// Your code goes here
let min = 0;
let max = 9;
let returnMax = 9;
let nextRoundMaxPlus = 4;
let returnI = 4;
let returnPrize = 100;
let prizeMultiplier = 2;
let roundPrize = 100;
let prize = 100;
let totalPrize = 0;   
let randomNum = Math.floor(Math.random() * (max - min) + min);
if(confirm('Do you want to play a game?')){
     for (let i = 3; i > 0; i--){
     let userNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max-1}
     \nAttempts left: ${i}
     \nTotal prize: ${totalPrize}$
     \nPossible prize on current attempt: ${prize}$`);
     console.log(randomNum)
     if(randomNum === userNumber){
          totalPrize += prize;
          if(confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`)){
               max += nextRoundMaxPlus;
               randomNum = Math.floor(Math.random() * (max - min) + min);
               roundPrize *= prizeMultiplier;
               prize = roundPrize;
               i = returnI;
     }else{
          alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
          if(confirm('Do you want to play again?')){
          max = returnMax;
          randomNum = Math.floor(Math.random() * (max - min) + min);
          i = returnI;
          prize = returnPrize;
          roundPrize = returnPrize;
          totalPrize = 0;
          }else{
          break;
          }
     }
     }else{
          if(i !== 1){
               prize /= prizeMultiplier;
     }else{
          totalPrize = 0;
          alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
          if(confirm('Do you want to play again?')){
               max = returnMax;
               randomNum = Math.floor(Math.random() * (max - min) + min);
               i = returnI;
               prize = returnPrize;
               roundPrize = returnPrize;
          }
     }
     }
     }
}else{
     alert('You did not become a billionaire, but can');
}

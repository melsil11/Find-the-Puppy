const player = {
    currentChoice: null
}

const computer = {
    currentChoice: null
}

const choices = ['faceCard1', 'faceCard2', 'faceCard3'];

function shuffleArray(choices) {
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
  console.log(choices);
  }

  shuffleArray(choices);
// console.log(choices)


function computerChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
    }

    function compareChoices() {
        player.currentChoice = event.currentTarget.innerText 
         computerChooses();
         
         if(computer.currentChoice === player.currentChoice) {
           document.getElementById("results").innerText="It's a tie. The computer and player both chose " + computer.currentChoice;
       }else if(computer.currentChoice === choices[0]){
         if(player.currentChoice === choices[1]){
           document.getElementById("results)".innerText="The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
         }else{
           document.getElementById("results").innerText="The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
         }
       }else if(computer.currentChoice === choices[1]){
          if(player.currentChoice === choices[2]){
            document.getElementById("results").innerText="The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
       }else{
         document.getElementById("results").innerText="The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
         }
       }else if(computer.currentChoice === choices[2]){
           if(player.currentChoice === choices[0]){
             document.getElementById("results").innerText="The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
         }else{
           document.getElementById("results").innerText="The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
         }
        }
       }
          
       















// console.log (choices)
// function shuffleCards(){
//     cardsarr = []
//     cardsarr.push(document.getElementById('faceCard1'));
//     cardsarr.push(document.getElementById('faceCard2'));
//     cardsarr.push(document.getElementById('faceCard3'));

//     const indexValue = ['2', '1', '0']
// }

// Array.prototype.shuffle = function() {
//     for (i = 1; i < this.length; i++) {
//        random = Math.round(Math.random() * i);
//        temp = this[random];
//        this[random] = this[i];
//        this[i] = temp;
//     }
//     return this;
//  };


// function computerChooses() {
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     computer.currentChoice = choices[randomIndex];
// }

// function compareChoices() {
//     player.currentChoice = event.currentTarget.innerText
//     computerChooses();


// }


document.getElementById('faceCard1').addEventListener('click', compareChoices);
document.getElementById('faceCard2').addEventListener('click', compareChoices);
document.getElementById('faceCard3').addEventListener('click', compareChoices);
// document.querySelector('.restart-game').addEventListener('click', handleRestartGame);




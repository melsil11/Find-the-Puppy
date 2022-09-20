const player = {
    currentChoice: null
}

const computer = {
    currentChoice: null
}

const choices = ['faceCard1', 'faceCard2', 'faceCard3'];



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


function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
}

function compareChoices() {
    player.currentChoice = event.currentTarget.innerText
    computerChooses();


}







document.getElementById('faceCard1').addEventListener('click', compareChoices)
document.getElementById('faceCard2').addEventListener('click', compareChoices)
document.getElementById('faceCard3').addEventListener('click', compareChoices)
document.querySelector('.restart-game').addEventListener('click', handleRestartGame);
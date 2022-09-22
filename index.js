// document.addEventListener("DOMContentLoaded", function(event) {

const player = {
    currentChoice: null
}

const computer = {
    currentChoice: null
}


const matchCard = ['matchCard']
// the array that will be shuffled and used to match the choices in the game///
const choices = ['faceCard1', 'faceCard2', 'faceCard3'];


// console.log(getElementsByClassName('cards'))
// const choice2 = document.createElement('div')
//     choice2.setAttribute('id', 'fisher') 
//     document.body.appendChild(choice2);
    // const fisher = document.createElement('img');
    // fisher.src = 'images/fisher.jpg';
    // document.body.appendChild(fisher);

    // choice2.appendChild(fisher)

function shuffleArray(choices) {

    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //   fisher yates randomizer
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    
    for ( let i = 0; i < choices.length; i++) {
        // used the shuffleArray function to create the face cards and ammend them to the html DOM
        if (choices[i] === 'faceCard1')   { 
            const card1 = document.createElement('img')
            card1.src = 'images/faceCard.jpeg'
            card1.style.width = '150px'
            card1.alt = 'faceCard1'
            card1.id = 'faceCard1'
            document.getElementsByClassName('cards')[0].appendChild(card1) 
            console.log('in shuffleArray conditional card1',document.getElementsByClassName('cards')[0]);
      
        } else if (choices[i] === 'faceCard2') {  
            const card2 = document.createElement('img')
            card2.src = 'images/faceCard.jpeg'
            card2.style.width = '150px'
            card2.alt = 'faceCard2'
            card2.id = 'faceCard2'
            document.getElementsByClassName('cards')[0].appendChild(card2) 
            console.log('in shuffleArray conditional card2',document.getElementsByClassName('cards')[0]);

        } else  {  
            const card3 = document.createElement('img')
            card3.src = 'images/faceCard.jpeg'
            card3.style.width = '150px'
            card3.alt = 'faceCard3'
            card3.id = 'faceCard3'
            document.getElementsByClassName('cards')[0].appendChild(card3) 
            console.log('in shuffleArray conditional card3',document.getElementsByClassName('cards')[0]);
   
        }
    console.log('in shuffleArray, choices',choices)
    }
    

}

shuffleArray(choices);

// const cardChoices = document.getElementsByClassName('cards')
// const cardChoices = document.getElementsByClassName('cards')
// const cards = document.getElementsByClassName('cards')

const matchCheck = (event) => {
    console.log('in matchCheck, event.target.id',event.target.id)
    let selection = event.target.id
    console.log('matchCheck, choices', choices)
    if (selection === 'faceCard1') {
        result = document.getElementById("results").innerText='Congratulations, You Win! Press the button to play again.';
    //    stop game
    } else  {
        result = document.getElementById("results").innerText='Sorry, no match. It is the computers turn.';
    } 
    console.log('in matchCheck, result',result)
    // const newChoices = choices.indexOf(selection)
    choices.splice(choices.indexOf(selection),1)
    console.log(choices)

    // remove the card choice from the array for computers turn
}


function computerChooses() {
    
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
    console.log(randomIndex)

}   

function computerChoice(computer)  {

    if(computer.currentChoice === 'faceCard1') {
        result = document.getElementById("results").innerText='The Computer Wins. Press the play again button to restart the game';
    
    } else if (computer.currentChoice === 'faceCard2'){
     
        result = document.getElementById("results").innerText='No one matched the Card. It is a Draw. Press the play again button to restart the game';
    
    } else if  (computer.currentChoice === 'faceCard3'){
       
        result = document.getElementById("results").innerText='No one matched the Card. It is a Draw. Press the play again button to restart the game';

    }
}
console.log('in computerChooses, result',computerChooses)



   





document.getElementById('faceCard1').addEventListener('click', matchCheck)
document.getElementById('faceCard2').addEventListener('click', matchCheck)  
document.getElementById('faceCard3').addEventListener('click', matchCheck)  
// //////original click event listeners that were used as models for new event listeners////
// document.getElementById('faceCard1').addEventListener('click', compareChoices);
// document.getElementById('faceCard2').addEventListener('click', compareChoices);
// document.getElementById('faceCard3').addEventListener('click', compareChoices);
// document.querySelector('.restart-game').addEventListener('click', handleRestartGame);


// })
// const playersTurn = () => {
//     // let result;
//      selection = 'faceCard1'
//     if (selection == choices[0]) {
//         result = 'match';
//     } else {
//         result = 'computers turn';
//     } 
//     console.log(result)
//   };


// const playersTurn2 = () => {
//     // let result;
//      selection = 'faceCard2'
//     if (selection == choices[1]) {
//         result = 'match';
//     } else {
//         result = 'computers turn';
//     } 
//     console.log(result)
//   };



// const playersTurn3 = () => {
//     // let result;
//      selection = 'faceCard3'
//     if (selection == choices[2]) {
//         result = 'match';
//     } else {
//         result = 'computers turn';
//     } 
//     console.log(result)
//   };

// function computerChooses() {
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     computer.currentChoice = choices[randomIndex];
//     console.log(randomIndex)
//     if(computer.currentChoice === 'faceCard1') {
//         result = document.getElementById("results").innerText='The Computer Wins. Press the play again button to restart the game';
    
//     } else if {
//         (computer.currentChoice === 'faceCard2')
//         result = document.getElementById("results").innerText='No one matched the Card. It is a Draw. Press the play again button to restart the game';
    
//     } else {
//         (computer.currentChoice === 'faceCard3')
//         result = document.getElementById("results").innerText='No one matched the Card. It is a Draw. Press the play again button to restart the game';

//     }
// }
// console.log('in computerChooses, result',computerChooses)
const cardArray = [
    {
        name:'1',
        img:'img/1.png',
    },
    {
        name:'2',
        img:'img/2.png',
    },
    {
        name:'3',
        img:'img/3.png',
    },
    {
        name:'4',
        img:'img/4.png',
    },
    {
        name:'5',
        img:'img/5.png',
    },
    {
        name:'6',
        img:'img/6.png',
    },
    {
        name:'1',
        img:'img/1.png',
    },
    {
        name:'2',
        img:'img/2.png',
    },
    {
        name:'3',
        img:'img/3.png',
    },
    {
        name:'4',
        img:'img/4.png',
    },
    {
        name:'5',
        img:'img/5.png',
    },
    {
        name:'6',
        img:'img/6.png'
    }
]
cardArray.sort(() =>  Math.random())



const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

console.log(gridDisplay)

function createBoard(){
    for (let i =0; i<cardArray.length; i++){ //maybe error
        const card =  document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        // console.log(card, i
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(cardArray);
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img') //#grid,
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(card);
    console.dir(card);
    console.log('check for match');

    if(optionOneId == optionTwoId){
        cards[optionTwoId].setAttribute('src','img/blank.png')
        cards[optionOneId].setAttribute('src','img/blank.png')
        alert('You have clicked the same image!')
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a mutch!')
        cards[optionOneId].setAttribute('src','img/white.png')
        cards[optionTwoId].setAttribute('src','img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src','img/blank.png')
        cards[optionTwoId].setAttribute('src','img/blank.png')
        alert('Sorry try again!')

    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'Congratulation you sound them all!'
        
    }


}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.dir(cardsChosenIds) 
    // console.log('clicked', cardId)
    // console.log(cardsChosen)
    this.setAttribute('src',cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

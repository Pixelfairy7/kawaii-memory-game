document.addEventListener('DOMContentLoaded',()=>{
//card options
const cardArray=[
    {
        name:'cake',
        img:'img/cake.png'
    },
    {
        name:'cake',
        img:'img/cake.png'
    },
    {
        name:'dessert',
        img:'img/dessert.png'
    },
    {
        name:'dessert',
        img:'img/dessert.png'
    },
    {
        name:'ice-cream',
        img:'img/ice-cream.png'
    },
    {
        name:'ice-cream',
        img:'img/ice-cream.png'
    },
    {
        name:'macaron',
        img:'img/macaron.png'
    },
    {
        name:'macaron',
        img:'img/macaron.png'
    },
    {
        name:'mini-donut',
        img:'img/mini-donut.png'
    },
    {
        name:'mini-donut',
        img:'img/mini-donut.png'
    },
    {
        name:'pudding',
        img:'img/pudding.png'
    },
    {
        name:'pudding',
        img:'img/pudding.png'
    },
]
cardArray.sort(()=> 0.5 - Math.random())
//select grid 
const grid = document.querySelector('.grid');
const resultDisplay=document.querySelector('#result')
let cardsChosen=[];
let cardsChosenId=[];
const cardsWon =[];
//create gameboard
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src','img/blue.png')
        card.setAttribute('data-id',i)
        card.classList.add('img')
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch(){
    let cards = document.querySelectorAll('.img')
    let optionOneId = cardsChosenId[0]
    let optionTwoId = cardsChosenId[1]
    if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match!!')
        cards[optionOneId].setAttribute('src','img/pink.png')
        cards[optionTwoId].setAttribute('src','img/pink.png')
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src','img/blue.png')
        cards[optionTwoId].setAttribute('src','img/blue.png')
        alert('Sorry, try again')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent="Congratulations! You matched them all!";
        cardArray.sort(()=> 0.5 - Math.random())
    }
}
//flip card 
function flipcard(){
    var cardId = this.getAttribute('data-id') 
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500)
    }
}

//invoke function to put cards on board 
createBoard();

})
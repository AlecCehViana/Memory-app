document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultsDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenIds = []
  const cardsWon = []


  //create your board
 function createBoard () {
   for ( let i = 0; i < cardArray.length; i++) {
     const card = document.createElement('img')
     card.setAttribute('src', 'images/blank.png')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard )
     grid.appendChild(card)
     
   }
 }
 createBoard()

  //check for matches
  function checkMatch (){

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log("check for match!") 

    if( optionOneId == optionTwoId){
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
      alert(`you found a match`)
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      alert('Sorry, try again!')
    }

    resultsDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = [] 

    if(cardsWon.length == (cardArray.length/2) ){
      resultsDisplay.innerHTML = " congratulations you found them all!"
    }
  }

  //*                  flip your card

  function flipCard(){
    let cardId = this.getAttribute('data-id')
  
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

                //*test
           console.log(cardsChosen)
           console.log(cardsChosenIds)

    this.setAttribute('src', cardArray[cardId].img)
     if ( cardsChosen.length === 2){
       setTimeout(checkMatch, 500)
     }
  }

})

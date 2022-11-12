Document.addEventLister('ContentFile', () => {

  const picArray = [
    {
var image = document.getElementById('oldman001');
image.src = "image001.png"
}
      name: 'oldman001',
      img: 'images/image001.png'
    },

    {
      name: 'oldman001',
      img: 'images/image001.png'
    },

    {
      name: 'oldman002',
      img: 'images/image002.png'
    },

    {
      name: 'oldman002',
      img: 'images/image002.gpng'
    },

    {
      name: 'oldman003',
      img: 'images/image003.png'
    },

    {
      name: 'oldman003',
      img: 'images/image003.png'
    },

    {
      name: 'oldman004',
      img: 'images/image004.png'
    },

    {
      name: 'oldman004',
      img: 'images/image004.png'
    },

    {
      name: 'oldman005',
      img: 'images/image005.png'
    },

    {
      name: 'oldman005',
      img: 'images/image005.png'
    },
    {
      name: 'oldman006',
      img: 'images/image006.png'
    },

    {
      name: 'oldman006',
      Img: 'images/image006.png'
    },

    {
      name: 'oldman007',
      img: 'images/image007.png'
    },

    {
      name: 'oldman007',
      img: 'images/image007.png'
    },

    {
      name: 'oldman008',
      img: 'images/image008.png'
    },

    {
      name: 'oldman008',
      img: 'images/image008.png'
    }
  ]
cardArray.sort (() => 0.8 - Math.random())
  const result = document.querySelector('#answer')

const resultDisplay = document.querySelector('.table')
var chosenCard = []
var chosenCardId = []
var correctCards = []

  function gameBoard() {
    for (let i = 0; i < picArray.length; i++);
    var pic = document.createElement('img')
    pic.setAttribute('src', 'images/cover01.png')
    pic.setAttribute('data-id', i)
    //pic.addEventListener('click',flipcard)
    table.appendChild(pic)
  }

function checkCard()

var cards = document.querySelectorAll('img')
const optionOneId = cardChosenId [0]
const optionTwoId = cardsChosen [1]
if (cardsChosen [0] === cardsChosen[1]) {
alert ('You found a match')
correctCards.push(chosenCard)
}else {

alert('Sorry, try again')

}
chosenCard= []
chosenCardId = []
answerDisplay.textContent = correctCards.length
if (correctCards.length === cardArray.length/2) {
resultDisplay.textContent = "congrats!"

}
}




function flipCard()
var picId = this.getAttribute ('data-id')
chosenCard.push(cardArray[picId].name])
chosenCardId.push(picId)

this.setAttribute('src', picArray[picId].img)

if(cardsChosen.length=== 2) {
setTimeout(checkCard, 500)




}
  gameBoard()



































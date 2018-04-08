var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = []
var cardOne
var cardTwo

function flipCard (cardId) {
  cardsInPlay.push(cards[cards[cardId]])
  checkForMatch()
  console.log('User flipped ' + cards[cardId])
}

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!')
  } else {
    alert('Sorry, try again')
  }
}

flipCard(1)

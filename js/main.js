var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = []
var cardOne
var cardTwo

cardOne = cards[0]
cardsInPlay.push(cardOne)

cardTwo = cards[2]
cardsInPlay.push(cardTwo)

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!')
  } else {
    alert('Sorry, try again')
  }
}

console.log(`User flipped ${cardsInPlay}`)

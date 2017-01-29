// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {
  // Your code goes here!
  $(".btn").on("click", function(event) {
    event.preventDefault()

  // Create the deck of cards using the getDeck() function
  var deck = window.getDeck()

  // Randomize the cards using the shuffle() function
  deck.shuffle()

// To avoid drawing the same card twice, I remove the card from the deck after each draw using the splice() fuction
// just like in the game where you remove the top card from the deck

  $("#c1").attr("src","http://golearntocode.com/images/cards/"+ deck[1] +".png")
  deck.splice(1,1)
  $("#c2").attr("src","http://golearntocode.com/images/cards/"+ deck[1] +".png")
  deck.splice(1,1)
  $("#c3").attr("src","http://golearntocode.com/images/cards/"+ deck[1] +".png")
  deck.splice(1,1)
  $("#c4").attr("src","http://golearntocode.com/images/cards/"+ deck[1] +".png")
  deck.splice(1,1)
  $("#c5").attr("src","http://golearntocode.com/images/cards/"+ deck[1] +".png")

  })

})

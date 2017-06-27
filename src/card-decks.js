// In a casino all the playing cards got mixed up, some of them got lost.
// You have to collect as many full decks as possible.
// You get N mixed up French playing cards as your input.
// The cards are of the following ranks: 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A
// The four suits are: Spade(♠), Club(♣), Heart(♥), and Diamond(♦)
// The cards are given using their rank followed by their suit:
// 2 of Spades: 2S Ace of Clubs:AC 10 of Hearts: TH
// Example: ['9C', 'KS', 'AC', 'AH', '8D', '4C', 'KD', 'JC', '7D', '9D', '2H', '7C', '3C', '7S', '5C', '6H', 'TH'] -> 0
//
// Calculate how many complete full french decks can be completed of 52 cards.
//
const calcDecks = (cards) => {
  const cardCount = {};
  cards.forEach((card) => {
    if (cardCount[card]) {
      cardCount[card] += 1;
    } else {
      cardCount[card] = 1;
    }
  });

  let deckCount = Number.MAX_VALUE;

  if (Object.keys(cardCount).length !== 52) {
    deckCount = 0;
  } else {
    Object.keys(cardCount).forEach((key) => {
      if (cardCount[key] < deckCount) {
        deckCount = cardCount[key];
      }
    });
  }

  return deckCount;
};

console.log(calcDecks(['9C', 'KS', 'AC', 'AH', '8D', '4C', 'KD', 'JC', '7D', '9D', '2H', '7C', '3C', '7S', '5C', '6H', 'TH']));
console.log(calcDecks(['QC', '6D', 'KD', 'QS', '7S', '5C', 'QH', '3H', 'AD', '9C', '7H', 'QD', 'QH', '2S', 'AH', 'KS', '5D', 'QC', 'AS', '2D', '6C', '8C', '7D', '8H', '9S', '4D', '6H', 'JC', '3S', '4C', '3C', '7S', 'KD', '4H', '5C', '7C', 'AS', '3D', '7D', '2H', '8S', '2H', '8D', '9S', '3C', '5H', 'KS', '8D', '9H', 'TH', '2C', 'JH', '6D', 'KC', 'TS', '6S', 'TD', '4S', '8S', '5S', '8H', 'TD', '9D', '4H', '6C', '7C', 'AC', 'JC', 'JD', 'TS', 'KH', '2C', 'QD', 'JS', 'QS', 'KH', '8C', '3H', '2D', '2S', '3S', '5H', '4S', '9C', '4D', '6H', 'JS', 'TH', '9H', 'TC', '7H', 'JH', 'TC', '6S', 'AD', 'AC', 'JD', '4C', '5D', '9D', 'KC', '3D']));
console.log(calcDecks(['2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH', '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH', '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD']));

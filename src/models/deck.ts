import { CardModel } from './card';
import { RANK } from '../enums/rank';
import { SUIT } from '../enums/suit';

export class Deck {
  cards: CardModel[] = [];

  shuffle() {
    const newDeck = [];
    for (let suit = SUIT.clubs; suit <= SUIT.spades; suit++) {
      for (let rank = RANK.Ace; rank <= RANK.King; rank++) {
        newDeck.push({ suit, rank });
      }
    }

    this.cards = [];

    while (newDeck.length) {
      const cardIndex = Math.floor(Math.random() * newDeck.length);
      const card = newDeck[cardIndex];
      newDeck.splice(cardIndex, 1);
      this.cards.push(card);
    }
  }

  getCard() {
    return this.cards.pop();
  }

  static from(data: CardModel[]) {
    const deck = new Deck();
    if (data) {
      deck.cards = data;
    }
    return deck;
  }
}
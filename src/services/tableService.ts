import { Table } from '../models/table';
import { Player } from '../models/player';
import { CardModel } from '../models/card';
import { RANK, SUIT } from '../enums';
import { EventEmitter } from 'events';

class TableService extends EventEmitter {

  deck: CardModel[] = [];
  players: any[];

  constructor() {
    super();
    this.deck.push({ rank: RANK.Ace, suit: SUIT.clubs });
    this.deck.push({ rank: RANK.Ace, suit: SUIT.spades });
  }

  addCard(card) {
    this.deck.push(card);
    this.emit('update', this.deck);
  }

}

const tableService = new TableService();

export default tableService;
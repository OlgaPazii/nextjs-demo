import { Player, PlayerData } from '../models/player';
import { CardModel } from '../models/card';
import { EventEmitter } from 'events';
import { Deck } from '../models/deck';


export interface TableData {
  deck: CardModel[];
  players: PlayerData[];
  currentPlayerId: string;
}

class TableService extends EventEmitter {

  deck: Deck = new Deck();
  players: Player[] = [];
  currentPlayerId: string = null;


  constructor() {
    super();
  }

  addPlayer(name: string) {
    const player = new Player(name);

    this.players.push(player);
    this.update();
    return player;
  }

  getData(): TableData {
    return {
      deck: this.deck.cards,
      players: this.players.map(player => player.toPlainObject()),
      currentPlayerId: null,
    }
  }

  addCard(card) {
    // this.deck.push(card);
    this.update();

  }

  update() {
    const url = (process.env.LONGPOLLER_URL || 'http://localhost:5000');
    fetch(`${url}/update`);
    this.emit('update', this.getData());
  }

  reset() {
    this.deck = new Deck();
    this.players = [];
    this.update();
  }

}

const tableService = new TableService();

export default tableService;
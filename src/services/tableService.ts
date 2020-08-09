import fs from 'fs';
import { Player, PlayerData } from '../models/player';
import { CardModel } from '../models/card';
import { Deck } from '../models/deck';

const url = (process.env.LONGPOLLER_URL || 'http://localhost:5000');

export interface TableData {
  deck: CardModel[];
  players: PlayerData[];
  currentPlayerId: string;
}

export class TableService {

  deck: Deck = new Deck();
  players: Player[] = [];
  currentPlayerId: string = null;

  constructor() {
    this.deck.shuffle();
  }

  addPlayer(name: string) {
    const player = new Player(name);
    this.players.push(player);
    return player;
  }

  getCard() {
    return this.deck.getCard();
  }

  getData(): TableData {
    return {
      deck: this.deck.cards,
      players: this.players.map(player => player.toPlainObject()),
      currentPlayerId: null,
    }
  }

  async update() {
    const body = JSON.stringify(this.getData(), null, 4);

    await fetch(`${url}/setData`, {
      body,
      method: 'POST',
    });
  }

  async loadRemoteData() {
    const res = await fetch(`${url}/getData`);
    const jsonData: TableData = await res.json();

    this.currentPlayerId = jsonData.currentPlayerId;
    this.players = Player.fromArray(jsonData.players);
    if (jsonData.deck && jsonData.deck.length) {
      this.deck = Deck.from(jsonData.deck);
    } else {
      this.deck = new Deck();
      this.deck.shuffle();
    }
  }

  reset() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.players = [];
    this.currentPlayerId = null;
    this.update();
  }

}

const tableService = new TableService();

export default tableService;
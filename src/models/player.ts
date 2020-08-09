import { CardModel } from "./card";
import { generateId } from "../utils";

export interface PlayerData {
  name: string;
  id: string;
  keypass?: string;
  hand: CardModel[];
}


export class Player {
  name: string;
  id: string;
  keypass?: string;
  hand: CardModel[];

  constructor(name: string) {
    this.name = name;
    this.id = generateId();
    this.hand = [];
    this.keypass = null;
  }

  toPlainObject(): PlayerData {
    return {
      name: this.name,
      id: this.id,
      hand: this.hand,
    }
  }
}
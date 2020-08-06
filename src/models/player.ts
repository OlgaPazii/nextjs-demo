import { CardModel } from "./card";

export class Player {
  name: string;
  id: string;
  keypass: string;
  hand: CardModel[];
}
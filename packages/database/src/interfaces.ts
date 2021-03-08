import { Deck } from './models';

export interface ModelMap {
  decks: Deck;
}

export type ModelName = keyof ModelMap;

import Model, {Associations} from '@nozbe/watermelondb/Model';
import date from '@nozbe/watermelondb/decorators/date';
import field from '@nozbe/watermelondb/decorators/field';
import readonly from '@nozbe/watermelondb/decorators/readonly';
import lazy from '@nozbe/watermelondb/decorators/lazy';
import {Q} from '@nozbe/watermelondb';
import {Card} from './card';

export class Deck extends Model {
  static table = 'decks';
  static associations: Associations = {
    cards: {type: 'has_many', foreignKey: 'deck_id'},
  };

  @field('name') name: string;
  @field('emoji') emoji: string | undefined;
  @field('detail') detail: string | undefined;
  @field('position') position: number;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;

  @lazy
  cards = this.collections
    .get<Card>('cards')
    .query(Q.where('deck_id', this.id));

  cardCount = 0;

  get displayName() {
    return `${this.emoji} ${this.name}`;
  }

  // @action
  // async move(direction: 'up' | 'down') {
  //   return this.update(deck => {
  //     let updatedPosition = deck.position;
  //     if (direction === 'down') {
  //       updatedPosition = deck.position + 1;
  //     } else {
  //       updatedPosition = deck.position - 1;
  //     }
  //     deck.position = Math.max(updatedPosition, 0);
  //   });
  // }
}

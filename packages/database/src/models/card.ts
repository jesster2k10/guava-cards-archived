import date from '@nozbe/watermelondb/decorators/date';
import field from '@nozbe/watermelondb/decorators/field';
import readonly from '@nozbe/watermelondb/decorators/readonly';
import relation from '@nozbe/watermelondb/decorators/relation';
import Model from '@nozbe/watermelondb/Model';

export type CardType = 'basic' | 'cloze' | 'list' | 'type-answer';

export class Card extends Model {
  static table = 'cards';

  @field('card_type') cardType: CardType;
  @field('content_front') contentFront: string;
  @field('content_back') contentBack: string;
  @field('content_additional') contentAdditional: string;
  @field('is_list_randomized') isListRandomized: boolean;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;

  @relation('decks', 'deck_id') deck;
}

import {CardType} from '@guava/database';

interface CardTypeInfo {
  title: string;
  info: string;
}

export const infoForCardType = (cardType: CardType): CardTypeInfo => {
  switch (cardType) {
    case 'basic':
      return {
        title: 'Basic',
        info: 'A basic flashcard with a front and back',
      };
    case 'cloze':
      return {
        title: 'Cloze',
        info: 'A flashcard with a fill the blanks',
      };
    case 'list':
      return {
        title: 'List',
        info: 'A flashcard with front and a list of answer options',
      };
    case 'type-answer':
      return {
        title: 'Type Answer',
        info: 'A basic flashard where you type in the answer',
      };
    default:
      return {} as CardTypeInfo;
  }
};

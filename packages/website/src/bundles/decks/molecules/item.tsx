import {paths} from '@/application/paths';
import {BoxProps} from '@chakra-ui/layout';
import {Deck} from '@guava/database';
import {Link} from '~/shared/link';
import {chakra} from '@chakra-ui/react';

export type DeckItemVariant = 'summary' | 'expanded';

export interface DeckItemProps extends BoxProps {
  deck: Deck;
  variant?: DeckItemVariant;
}

const DeckItem = ({deck, variant = 'summary', ...props}: DeckItemProps) => {
  return (
    <Link
      d="flex"
      alignItems="center"
      layerStyle="block"
      data-testid="deck-item"
      px={3}
      py={1}
      mb={0.5}
      to={paths.decks.show(deck)}
      {...(props as any)}>
      <chakra.figure mr="2">{deck.emoji}</chakra.figure>
      <chakra.div flex="1" noOfLines={1}>
        {deck.name}
      </chakra.div>
      <chakra.span fontSize="xs" color="secondary">
        {deck.cardCount}
      </chakra.span>
    </Link>
  );
};

export {DeckItem};

/**
 * Created by Jesse Onolememen. 26/02/2021
 */

import {Box, BoxProps} from '@chakra-ui/react';
import {Deck} from '@guava/database';
import {DeckItem} from './DeckItem';

interface DeckListProps extends BoxProps {
  decks: Deck[];
  // isFetching?: boolean;
}

const DeckList = ({decks}: DeckListProps) => {
  return (
    <Box display="flex" flexDir="column">
      {decks.map(deck => (
        <DeckItem deck={deck} key={deck.id} />
      ))}
    </Box>
  );
};

export {DeckList};

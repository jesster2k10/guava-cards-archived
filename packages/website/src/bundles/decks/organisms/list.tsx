/**
 * Created by Jesse Onolememen. 26/02/2021
 */

import {Deck} from '@guava/database';
import {Box, BoxProps} from '@chakra-ui/react';
import {DeckItem} from '../molecules/item';

interface DeckListProps extends BoxProps {
  decks: Deck[];
  isFetching?: boolean;
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

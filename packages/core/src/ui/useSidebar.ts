import {useList} from '../database';
import {useInsert} from '../database/useInsert';
import {useDisclosure} from './useDisclosure';

export function useSidebar() {
  const {
    isOpen: addDeckIsOpen,
    setIsOpen: setAddDeckIsOpen,
    open: openAddDeck,
    close: closeAddDeck,
  } = useDisclosure();
  const {insert: createDeck} = useInsert('decks');
  const decks = useList('decks');
  console.log(decks);

  return {
    decks,
    addDeckIsOpen,
    openAddDeck,
    closeAddDeck,
    setAddDeckIsOpen,
    createDeck,
  };
}

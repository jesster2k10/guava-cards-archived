import {useMemo} from 'react';
import {resourcePaths as resource, Identifiable} from '../config/resources';

export const paths = {
  decks: resource('d'),
  cards: {
    ...resource('c'),
    add(deck: Identifiable) {
      return `${this.new}/${deck.id}`;
    },
    for(deck: Identifiable) {
      return `${this.list}?deckId=${deck.id}`;
    },
  },
};

paths.decks.dynamic(':deckId');

export const usePaths = () => {
  const memoizedPaths = useMemo(() => paths, []);
  return memoizedPaths;
};

import {useMemo} from 'react';
import {resourcePaths as resource} from '../config/resources';

export const paths = {
  decks: resource('d'),
  cards: resource('c'),
};

paths.decks.dynamic(':deckId');

export const usePaths = () => {
  const memoizedPaths = useMemo(() => paths, []);
  return memoizedPaths;
};

import {paths} from '@/application/paths';
import {useAppDispatch, useAppSelector} from '@/application/store';
import {Breadcrumbs} from '@/layout/page/breadcrumbs';
import {useFind, useParam} from '@guava/core';
import {useCallback, useEffect, useMemo} from 'react';
import {
  currentEditorSelector,
  currentEditorValuesSelector,
  initialzeCardEditor,
  setCardEditor,
  setCardEditorValue,
} from './store';
import {AddCardEditor, AllEditorValues} from './types';

export function useCardEditor(deckId: string) {
  const dispatch = useAppDispatch();
  const currentEditor = useAppSelector(currentEditorSelector(deckId));
  const editorValue = useAppSelector(
    currentEditorValuesSelector(deckId, currentEditor),
  );

  useEffect(() => {
    dispatch(initialzeCardEditor({deckId}));
  }, [deckId, dispatch]);

  const setCurrentEditor = useCallback(
    (editor: AddCardEditor) => dispatch(setCardEditor({deckId, editor})),
    [dispatch, deckId],
  );

  const setEditorValue = useCallback(
    (value: Partial<AllEditorValues>, editor = currentEditor) =>
      dispatch(
        setCardEditorValue({
          deckId,
          value,
          editor,
        }),
      ),
    [deckId, dispatch, currentEditor],
  );

  return {
    currentEditor,
    setCurrentEditor,
    editorValue,
    setEditorValue,
  };
}

export function useCardEditorPage() {
  const deckId = useParam('deckId');
  const deck = useFind('decks', deckId);
  const breadcrumbs = useMemo<Breadcrumbs>(() => {
    return deck
      ? [
          {title: 'Home', path: '/'},
          {title: 'Decks'},
          {title: deck.displayName, path: paths.decks.show(deck)},
          {title: 'Cards', path: paths.cards.for(deck)},
          {title: 'Add Cards', path: paths.cards.add(deck)},
        ]
      : [
          {title: 'Home', path: '/'},
          {title: 'Cards', path: paths.cards.list},
          {title: 'Add Cards', path: paths.cards.new},
        ];
  }, [deck]);

  const editor = useCardEditor(deckId);

  return {
    deck,
    deckId,
    breadcrumbs,
    ...editor,
  };
}

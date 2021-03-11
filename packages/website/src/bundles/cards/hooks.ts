import {paths} from '@/application/paths';
import {useAppDispatch, useAppSelector} from '@/application/store';
import {Breadcrumbs} from '@/layout/page/breadcrumbs';
import {useFind, useParam} from '@guava/core';
import {useCallback, useEffect, useMemo} from 'react';
import {EditorValue} from '~/editor';
import {
  AddCardEditor,
  currentEditorListBlocks,
  currentEditorSelector,
  currentEditorValuesSelector,
  EditorValueType,
  initialzeCardEditor,
  ListEditorBlockType,
  setCardEditor,
  setCardEditorListBlocks,
  setCardEditorValue,
} from './store';

export function useCardEditor(deckId: string) {
  const dispatch = useAppDispatch();
  const currentEditor = useAppSelector(currentEditorSelector(deckId));
  const editorValues = useAppSelector(currentEditorValuesSelector(deckId));
  const editorListBlocks = useAppSelector(currentEditorListBlocks(deckId));

  useEffect(() => {
    dispatch(initialzeCardEditor({deckId}));
  }, [deckId, dispatch]);

  const setCurrentEditor = useCallback(
    (editor: AddCardEditor) => dispatch(setCardEditor({deckId, editor})),
    [dispatch, deckId],
  );

  const setEditorValue = useCallback(
    (valueType: EditorValueType, value: EditorValue) =>
      dispatch(
        setCardEditorValue({
          deckId,
          value,
          type: valueType,
        }),
      ),
    [deckId, dispatch],
  );

  const setEditorListBlocks = useCallback(
    (blocks: ListEditorBlockType[]) =>
      dispatch(
        setCardEditorListBlocks({
          blocks,
          deckId,
        }),
      ),
    [deckId, dispatch],
  );

  return {
    currentEditor,
    setCurrentEditor,
    editorValues,
    setEditorValue,
    setEditorListBlocks,
    editorListBlocks,
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

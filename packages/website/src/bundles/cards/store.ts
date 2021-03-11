import {AppState} from '@/application/store';
import {uid} from '@/utils/uid';
import {Card, CardType} from '@guava/database';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {EditorValue} from '~/editor';

// MARK:- Interfaces

export type AddCardEditor = CardType;
export type EditorValueType = 'front' | 'back';
export type ListEditorBlockType = {
  id: string;
  value: EditorValue;
};

export interface AddCardsFormState {
  errors: Record<string, string | string[] | null>;
  editorType: AddCardEditor;
  editorValues: Record<EditorValueType, EditorValue>;
  listBlocks?: ListEditorBlockType[];
}

export interface AddCardsState {
  form: {
    [deckId: string]: {
      previous: AddCardsFormState[];
      current: AddCardsFormState;
      next: AddCardsFormState[];
    };
  };

  persisted: {
    [deckId: string]: {
      previous: Card[];
      current?: Card;
      next: Card[];
    };
  };
}

// MARK:- Slice

const addCardStore = createSlice({
  name: 'addCard',
  initialState: {
    form: {},
    persisted: {},
  } as AddCardsState,
  reducers: {
    initialize: (state, action: PayloadAction<{deckId: string}>) => {
      const {deckId} = action.payload;
      state.form[deckId] ||= {
        previous: [],
        current: {
          listBlocks: [{id: uid(), value: null}],
          errors: {},
          editorType: 'basic',
          editorValues: {
            front: null,
            back: null,
          },
        },
        next: [],
      };

      state.persisted[deckId] ||= {
        previous: [],
        next: [],
      };
    },
    setEditor: (
      state,
      {payload}: PayloadAction<{deckId: string; editor: AddCardEditor}>,
    ) => {
      const {editor, deckId} = payload;
      state.form[deckId].current ||= {
        errors: {},
        editorType: editor,
        editorValues: {front: null, back: null},
        listBlocks: [{id: uid(), value: null}],
      };
      state.form[deckId].current.editorType = editor;
    },
    setEditorValue: (
      state,
      action: PayloadAction<{
        deckId: string;
        value: EditorValue;
        type: EditorValueType;
      }>,
    ) => {
      const {deckId, value, type} = action.payload;
      state.form[deckId].current.editorValues ||= {front: null, back: null};
      state.form[deckId].current.editorValues[type] = value;
    },
    setEditorListBlocks: (
      state,
      action: PayloadAction<{
        deckId: string;
        blocks: ListEditorBlockType[];
      }>,
    ) => {
      const {deckId, blocks} = action.payload;
      state.form[deckId].current.listBlocks = blocks;
    },
  },
});

// MARK:- Selectors

export const formSelector = (deckId: string) =>
  createSelector(
    (state: AppState) => state.addCards.form,
    form => form[deckId],
  );

export const currentFormSelector = (deckId: string) =>
  createSelector(
    formSelector(deckId),
    form => form?.current || ({} as AddCardsFormState),
  );

export const currentEditorSelector = (deckId: string) =>
  createSelector(
    currentFormSelector(deckId),
    form => form.editorType || 'basic',
  );

export const currentEditorValuesSelector = (deckId: string) =>
  createSelector(currentFormSelector(deckId), form => form.editorValues || {});

export const currentEditorValueSelector = (
  deckId: string,
  valueType: EditorValueType,
) =>
  createSelector(
    currentFormSelector(deckId),
    form => form.editorValues[valueType] || {},
  );

export const currentEditorListBlocks = (deckId: string) =>
  createSelector(currentFormSelector(deckId), form => form.listBlocks || []);

// MARK:- Exports

export const {
  initialize: initialzeCardEditor,
  setEditor: setCardEditor,
  setEditorValue: setCardEditorValue,
  setEditorListBlocks: setCardEditorListBlocks,
} = addCardStore.actions;

export const addCardsReducer = addCardStore.reducer;

import {AppState} from '@/application/store';
import {Card, CardType} from '@guava/database';
import {NewCardInputType} from '@guava/validation';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {EditorValue} from '~/editor';

// MARK:- Interfaces

export type AddCardEditor = CardType;
export type EditorValueType = 'front' | 'back';

export interface AddCardsFormState {
  values: NewCardInputType;
  errors: Record<string, string | string[] | null>;
  editor: AddCardEditor;
  editorValues: Record<EditorValueType, EditorValue>;
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
          values: {},
          errors: {},
          editor: 'basic',
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
        values: {},
        errors: {},
        editor,
        editorValues: {front: null, back: null},
      };
      state.form[deckId].current.editor = editor;
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
  createSelector(currentFormSelector(deckId), form => form.editor || 'basic');

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

// MARK:- Exports

export const {
  initialize: initialzeCardEditor,
  setEditor: setCardEditor,
  setEditorValue: setCardEditorValue,
} = addCardStore.actions;

export const addCardsReducer = addCardStore.reducer;

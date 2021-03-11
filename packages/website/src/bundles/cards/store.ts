import {AppState} from '@/application/store';
import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {
  initialCurrentFormState,
  initialFormState,
  initialFormValueState,
  intitialPersistedState,
} from './state';
import {
  AddCardEditor,
  AddCardsFormState,
  AddCardsState,
  EditorValueMap,
  InitializeAction,
  SetEditorAction,
  SetEditorValueAction,
} from './types';

const addCardStore = createSlice({
  name: 'addCard',
  initialState: {
    form: {},
    persisted: {},
  } as AddCardsState,
  reducers: {
    initialize: (state, action: InitializeAction) => {
      const {deckId} = action.payload;
      state.form[deckId] ||= {...initialFormState};
      state.persisted[deckId] ||= {...intitialPersistedState};
    },
    setEditor: (state, {payload}: SetEditorAction) => {
      const {editor, deckId} = payload;
      state.form[deckId].current ||= {...initialCurrentFormState};
      state.form[deckId].current.editorType = editor;
    },
    setEditorValue: (state, action: SetEditorValueAction) => {
      const {deckId, value, editor} = action.payload;
      state.form[deckId].current.values ||= {...initialFormValueState};
      state.form[deckId].current.values[editor] = value;
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

export const currentEditorValuesSelector = (
  deckId: string,
  editorType: AddCardEditor,
) =>
  createSelector(
    currentFormSelector(deckId),
    form => form.values[editorType] || {},
  );

export const currentEditorValueSelector = (
  deckId: string,
  editorType: AddCardEditor,
  valueType: keyof EditorValueMap[typeof editorType],
) =>
  createSelector(
    currentFormSelector(deckId),
    form => form.values[editorType][valueType] || {},
  );

// MARK:- Exports

export const {
  initialize: initialzeCardEditor,
  setEditor: setCardEditor,
  setEditorValue: setCardEditorValue,
} = addCardStore.actions;

export const addCardsReducer = addCardStore.reducer;

import {Card, CardType} from '@guava/database';
import {PayloadAction} from '@reduxjs/toolkit';
import {EditorValue} from '~/editor';

export type AddCardEditor = CardType;

export interface ListEditorBlockType {
  id: string;
  value?: string;
}

export interface TypeAnswerEditorValue {
  question: EditorValue;
  answer: string;
}

export interface BasicEditorValue {
  front: EditorValue;
  back: EditorValue;
}

export interface ListEditorValue {
  blocks: ListEditorBlockType[];
}

export interface ClozeEditorValue {
  front: EditorValue;
  backExtra?: EditorValue;
}

export type AllEditorValues = ListEditorBlockType &
  TypeAnswerEditorValue &
  BasicEditorValue &
  ListEditorValue &
  ClozeEditorValue;

export interface EditorValueItemMap {
  basic: BasicEditorValue;
  list: ListEditorValue;
  cloze: ClozeEditorValue;
  typeAnswer: TypeAnswerEditorValue;
}

export type EditorValueMap = {
  [key in AddCardEditor]: Partial<EditorValueItemMap[key]>;
};

export interface AddCardsFormState {
  editorType: AddCardEditor;
  values: EditorValueMap;
}

// MARK:- State

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

// MARK:- Actions

export type InitializeAction = PayloadAction<{
  deckId: string;
}>;

export type SetEditorAction = PayloadAction<{
  deckId: string;
  editor: AddCardEditor;
}>;

export type SetEditorValueAction = PayloadAction<{
  deckId: string;
  editor: AddCardEditor;
  value: Partial<AllEditorValues>;
}>;

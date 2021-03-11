import {uid} from '@/utils/uid';
import {AddCardsState} from './types';

export const initialState: AddCardsState = {
  form: {},
  persisted: {},
};

export const initialFormState: AddCardsState['form'][''] = {
  previous: [],
  next: [],
  current: {
    editorType: 'basic',
    values: {
      basic: {},
      cloze: {},
      list: {
        blocks: [{id: uid(), value: ''}],
      },
      typeAnswer: {},
    },
  },
};

export const intitialPersistedState: AddCardsState['persisted'][''] = {
  previous: [],
  next: [],
};

export const initialCurrentFormState = initialFormState.current;
export const initialFormValueState = initialCurrentFormState.values;

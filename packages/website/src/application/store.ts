import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web;
import {addCardsReducer} from '~/cards/store';

const rootReducer = combineReducers({
  addCards: addCardsReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['addCards'],
  },
  rootReducer,
);

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    createLogger({
      diff: true,
    }),
  ],
});

store.replaceReducer(persistedReducer as never);

const persistor = persistStore(store);

if (process.env.NODE_ENV === 'development') {
  (window as any).persistor = persistor;
  (window as any).store = store;
}

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const stateSelector = (state: AppState) => state;

export {store, persistor};

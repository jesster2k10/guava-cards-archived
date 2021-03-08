import {useContext} from 'react';
import isEmpty from 'lodash/isEmpty';
import {DatabaseContext} from '../context/database';

export function useDatabase() {
  const value = useContext(DatabaseContext);
  if (isEmpty(value)) {
    throw new Error('Called useDatabase outside of a DatabaseContext');
  }
  (global as any).database = value.database;
  return value.database;
}

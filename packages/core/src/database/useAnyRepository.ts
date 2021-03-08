import {ModelName, AnyRepository} from '@guava/database';
import {useMemo} from 'react';
import {useDatabase} from './useDatabase';

export type RepositoryName = ModelName;

export function useAnyRepository(name: ModelName) {
  const database = useDatabase();
  const repository = useMemo(() => new AnyRepository(name, database), [
    name,
    database,
  ]);
  return repository;
}

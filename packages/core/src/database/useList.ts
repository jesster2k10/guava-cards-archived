import {
  ObservableResource,
  useObservableState,
  useObservableSuspense,
} from 'observable-hooks';
import {useMemo} from 'react';
import {RepositoryName, useAnyRepository} from './useAnyRepository';

export function useList(name: RepositoryName) {
  const repository = useAnyRepository(name);
  const list$ = useMemo(() => repository.list(), [repository]);
  return useObservableState(list$, []);
}

export function useListSuspense(name: RepositoryName) {
  const repository = useAnyRepository(name);
  const resource = useMemo(() => {
    const list$ = repository.list();
    const res = new ObservableResource(list$, value => value !== undefined);
    return res;
  }, [repository]);
  return useObservableSuspense(resource);
}

import {
  ObservableResource,
  useObservableState,
  useObservableSuspense,
} from '@guava/observable-hooks';
import {useMemo} from 'react';
import {RepositoryName, useAnyRepository} from './useAnyRepository';

export function useFind(name: RepositoryName, id: string) {
  const repository = useAnyRepository(name);
  const find$ = repository.findById(id);
  const data = useObservableState(find$);

  return data;
}

export function useFindSuspense(name: RepositoryName, id: string) {
  const repository = useAnyRepository(name);
  const resource = useMemo(() => {
    const find$ = repository.findById(id);
    const observableResource = new ObservableResource(find$, value => !!value);
    return observableResource;
  }, [id, repository]);

  return useObservableSuspense(resource);
}

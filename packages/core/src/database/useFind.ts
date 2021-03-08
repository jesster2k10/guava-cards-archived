import {
  ObservableResource,
  useObservableState,
  useObservableSuspense,
} from 'observable-hooks';
import {RepositoryName, useAnyRepository} from './useAnyRepository';

export function useFind(name: RepositoryName, id: string) {
  const repository = useAnyRepository(name);
  const find$ = repository.findById(id);
  const data = useObservableState(find$);

  return data;
}

export function useFindSuspense(name: RepositoryName, id: string) {
  const repository = useAnyRepository(name);
  const find$ = repository.findById(id);
  const resource = new ObservableResource(find$, value => !!value);

  return useObservableSuspense(resource);
}

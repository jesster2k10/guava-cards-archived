import {useState} from 'react';
import {RepositoryName, useAnyRepository} from './useAnyRepository';

export function useInsert<T>(name: RepositoryName) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const repository = useAnyRepository(name);
  const insert = async (data: T) => {
    setLoading(true);
    try {
      await repository.insert(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    insert,
    loading,
    error,
  };
}

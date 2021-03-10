import {useParams} from 'react-router-dom';

export function useParam<T extends unknown = string>(name: string): T {
  const params = useParams();
  return (params[name] as unknown) as T;
}

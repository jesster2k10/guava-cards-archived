import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';

type ResourceAction = 'show' | 'list' | 'edit' | 'new' | 'root' | 'dynamic';

export interface Identifiable {
  id?: string;
}

interface ResourcePaths<T> {
  root: string;
  show: (resource: T | string) => string;
  edit: (resource: T | string) => string;
  new: string;
  list: string;
  dynamic: (segment: string) => string;
  child: {
    new: string;
    edit: (idSegment: string) => string;
  };
}

type ResourcedPaths<T, Actions extends keyof ResourcePaths<T>> = Pick<
  ResourcePaths<T>,
  Actions
>;

export function resourcePaths<
  Actions extends keyof ResourcePaths<T>,
  T extends Identifiable = Identifiable
>(root: string, ...actions: Actions[]): ResourcedPaths<T, Actions> {
  const paths: ResourcePaths<T> = {
    root,
    show: (resource: T | string) =>
      `/${root}/${typeof resource === 'string' ? resource : resource.id}`,
    edit: (resource: T | string) =>
      `/${root}/${typeof resource === 'string' ? resource : resource.id}/edit`,
    new: `/${root}/new`,
    list: `/${root}/list`,
    dynamic: (segment: string) => `/${root}/:${segment.replace(':', '')}`,
    child: {
      edit: (segment: string) => `/:${segment}/edit`,
      new: 'new',
    },
  };

  return pick(
    paths,
    isEmpty(actions)
      ? ['show', 'list', 'edit', 'new', 'dynamic', 'root', 'child']
      : [...actions, 'dynamic', 'root', 'child'],
  );
}

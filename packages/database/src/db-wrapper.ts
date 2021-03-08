import type {
  Collection,
  Database as WatermelonDatabase,
} from '@nozbe/watermelondb';
import { ModelMap, ModelName } from './interfaces';

export interface DatabaseInstance
  extends Omit<WatermelonDatabase, 'collections'> {
  collection: <Name extends ModelName>(
    name: Name,
  ) => Collection<ModelMap[Name]>;
}

export function wrapDb(database: WatermelonDatabase): DatabaseInstance {
  const wrappedDatabase = {
    ...database,
    collection: <Name extends ModelName>(
      name: Name,
    ): Collection<ModelMap[Name]> => database.collections.get<any>(name),
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-proto
  Object.setPrototypeOf(wrappedDatabase, database.__proto__);

  return wrappedDatabase as any;
}

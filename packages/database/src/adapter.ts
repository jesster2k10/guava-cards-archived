import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from './schema';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'guava',
});

export { adapter };

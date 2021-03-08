import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import {schema} from './schema';

const adapter = new LokiJSAdapter({
  schema,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useWebWorker: false,
  useIncrementalIndexedDB: true,
});

export {adapter};

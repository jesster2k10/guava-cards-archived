/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import {isElectron, isNative} from './platform';
import {schema} from './schema';

function createAdapter() {
  if (isElectron() || isNative()) {
    const {
      default: SQLiteAdapter,
    } = require('@nozbe/watermelondb/adapters/sqlite').default;
    return new SQLiteAdapter({
      schema,
      dbName: 'guava',
    });
  }

  const {
    default: LokiJSAdapter,
  } = require('@nozbe/watermelondb/adapters/lokijs');
  return new LokiJSAdapter({
    schema,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useWebWorker: false,
    useIncrementalIndexedDB: true,
  });
}

const adapter = createAdapter();

export {adapter};

/* eslint-disable no-proto */
import {Database} from '@nozbe/watermelondb';
import {adapter} from './adapter';
import {wrapDb} from './db-wrapper';
import * as models from './models';

let db: Database | undefined;

if (!db) {
  db = new Database({
    adapter,
    modelClasses: Object.values(models),
    actionsEnabled: true,
  });
}

const database = wrapDb(db);

export {database};

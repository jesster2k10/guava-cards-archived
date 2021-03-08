import * as path from 'path';
import { isDev } from './is-dev';

export const DEV_PORT = process.env.DEV_PORT || 3000;
export const LOAD_URL = isDev
  ? `http://localhost:${DEV_PORT}`
  : `file://${path.join(__dirname, '../../web/dist/index.html')}`;

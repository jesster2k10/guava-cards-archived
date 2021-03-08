import {DatabaseInstance} from '../db-wrapper';

export class BaseRepository {
  public constructor(protected readonly database: DatabaseInstance) {}
}

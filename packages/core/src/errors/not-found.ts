export class NotFoundError extends Error {
  public constructor(
    protected readonly collectionName: string,
    protected readonly id: string,
  ) {
    super(`Record ${collectionName}#${id} was not found`);
  }
}

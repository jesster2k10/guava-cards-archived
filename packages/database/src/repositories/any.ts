import * as z from 'zod';
import {Model as ModelType} from '@nozbe/watermelondb';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {NotFoundError} from '@guava/core';
import {DatabaseInstance} from '../db-wrapper';
import {ModelMap, ModelName} from '../interfaces';

export class AnyRepository<
  Name extends ModelName,
  Record extends ModelType = ModelMap[Name]
> {
  public constructor(
    protected readonly name: Name,
    protected readonly database: DatabaseInstance,
  ) {}

  list = () => {
    return this.database
      .collection(this.name)
      .query()
      .observe()
      .pipe(results => results || []);
  };

  first = () => {
    return this.list().pipe(
      map(results => results[0]),
      map(result => result || undefined),
    );
  };

  findById = (id: string): Observable<Record> => {
    return this.database
      .collection(this.name)
      .findAndObserve(id)
      .pipe(
        map(result => (result as never) as Record),
        catchError(() => throwError(new NotFoundError(this.name, id))),
      );
  };

  update = async <S extends z.ZodType<any, any> = any>(
    model: Record,
    input: z.infer<S>,
    validationSchema?: S,
  ) => {
    const schema = validationSchema || z.any();
    const result = schema.parse(input);
    return this.database.action<Record>(async () => {
      await model.update(record => {
        Object.keys(result).forEach(key => {
          record[key] = result[key];
        });
      });
    });
  };

  updateById = async <S extends z.ZodType<any, any> = any>(
    id: string,
    input: z.infer<S>,
    validationSchema?: S,
  ) => {
    const record = await this.findById(id).toPromise();
    console.log(record);
    await this.update(record, input, validationSchema);
  };

  insert = async <S extends z.ZodType<any, any> = any>(
    input: z.infer<S>,
    validationSchema?: S,
  ) => {
    const schema = validationSchema || z.any();
    const result = schema.parse(input);
    return this.database.action<Record>(async () => {
      const created = await this.database
        .collection(this.name)
        .create(record => {
          Object.keys(result).forEach(key => {
            record[key] = result[key];
          });
        });

      return created;
    });
  };
}

(global as any).AnyRepository = AnyRepository;

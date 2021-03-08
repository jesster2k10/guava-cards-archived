import 'reflect-metadata';
import { ZodSchema } from 'zod';

export interface SchemaMetadata {
  index: number;
  schema: ZodSchema<any>;
}

export const schemaMetadataKey = Symbol('schema');

export function Schema<T>(schema: ZodSchema<T>) {
  function decorator(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
  ) {
    const existingSchemaMetadata =
      Reflect.getOwnMetadata(schemaMetadataKey, target, propertyKey) || [];
    existingSchemaMetadata.push({
      index: parameterIndex,
      schema,
    });
    Reflect.defineMetadata(
      schemaMetadataKey,
      existingSchemaMetadata,
      target,
      propertyKey,
    );
  }

  return decorator;
}

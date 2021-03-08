import { ZodSchema } from 'zod';
import { ValidationError } from './error';

interface ValidationResult<SchemaDef> {
  data?: SchemaDef;
  errors?: Record<string, string[]>;
}

export const validate = <SchemaDef>(
  schema: ZodSchema<SchemaDef>,
  data: SchemaDef,
): ValidationResult<SchemaDef> => {
  try {
    const result = schema.parse(data);
    return { data: result };
  } catch (_error) {
    const error = _error as ValidationError;
    const errors = error.formErrors.fieldErrors;
    return { errors };
  }
};

export const validateOrFail = <SchemaDef>(
  schema: ZodSchema<SchemaDef>,
  data: SchemaDef,
): SchemaDef => {
  try {
    return schema.parse(data);
  } catch (_error) {
    const error = _error as ValidationError;
    throw error;
  }
};

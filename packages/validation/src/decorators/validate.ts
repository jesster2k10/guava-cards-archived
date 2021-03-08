// /* eslint-disable prefer-rest-params */
// import { schemaMetadataKey, SchemaMetadata } from './schema';
// import { validateOrFail } from '../utils/validate';

// export function validate(
//   target: any,
//   propertyName: string,
//   descriptor: TypedPropertyDescriptor<Function>,
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function () {
//     const schemaMetadata: SchemaMetadata[] = Reflect.getOwnMetadata(
//       schemaMetadataKey,
//       target,
//       propertyName,
//     );

//     if (schemaMetadata) {
//       schemaMetadata.forEach(item => {
//         const data = arguments[item.index];
//         const parsed = validateOrFail(item.schema, data);
//         arguments[item.index] = parsed;
//       });
//     }

//     return originalMethod.apply(this, arguments);
//   };

//   return descriptor;
//   // };let method = descriptor.value;
//   // const method = descriptor.value;

//   // descriptor.value = function () {
//   //   const requiredParameters: number[] = Reflect.getOwnMetadata(
//   //     requiredMetadataKey,
//   //     target,
//   //     propertyName,
//   //   );
//   //   if (requiredParameters) {
//   //     for (const parameterIndex of requiredParameters) {
//   //       if (
//   //         parameterIndex >= arguments.length ||
//   //         arguments[parameterIndex] === undefined
//   //       ) {
//   //         throw new Error('Missing required argument.');
//   //       }
//   //     }
//   //   }
//   //   return method.apply(this, arguments);
//   // };
// }

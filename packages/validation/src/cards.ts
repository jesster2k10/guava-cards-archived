import * as z from 'zod';

export const NewCardInput = z.object({});
export type NewCardInputType = z.infer<typeof NewCardInput>;

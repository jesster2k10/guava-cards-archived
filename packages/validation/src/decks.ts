import * as z from 'zod';

export const NewDeckInput = z.object({
  name: z.string().nonempty('This field is required'),
  emoji: z.string().optional(),
});

export type NewDeckInputType = z.infer<typeof NewDeckInput>;

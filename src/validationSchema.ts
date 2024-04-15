import { z } from 'zod';

export const ValidationSchema = z
  .object({
    id: z.union([z.string(), z.number()]),
    name: z.string(),
    category: z.string(),
    fields: z.array(z.string()),
    subject: z.string(),
    level: z.string(),
    price: z.object({
      amount: z.number(),
      currency: z.string(),
    }),

    ratings: z.number(),
    language: z.string(),
  })
  .strict();

export const CreateValidationSchema = ValidationSchema.omit({ id: true });

export const UpdateValidationSchema = ValidationSchema.extend({
  id: z.union([z.string(), z.number()]).optional(),
});

export type Entity = z.infer<typeof ValidationSchema>;

export type EntityCreate = z.infer<typeof CreateValidationSchema>;

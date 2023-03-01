import { array, object, string, number, TypeOf } from 'zod';

const hortaSchema = object({
  name: string(),
  id: number(),
  address: string(),
  lots: array(object({ id: number(), name: string() })),
});

export type Horta = TypeOf<typeof hortaSchema>;

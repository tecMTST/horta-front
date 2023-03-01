import { number, object, string, TypeOf } from 'zod';

const plantaSchema = object({
  id: number(),
  name: string(),
});

export type Planta = TypeOf<typeof plantaSchema>;

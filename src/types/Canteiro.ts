import { array, number, object, string, TypeOf } from 'zod';

const canteiroSchema = object({
  id: number(),
  name: string(),
  garden_id: number(),
  crops: array(object({ name: string(), id: number() })),
  sensors: array(object({ code: string(), type: string(), id: number() })),
});

export type Canteiro = TypeOf<typeof canteiroSchema>;

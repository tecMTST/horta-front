import { object, string, TypeOf } from 'zod';

const usuarioSchema = object({
  email: string().email().optional(),
  name: string(),
  token: string(),
});

export type Usuario = TypeOf<typeof usuarioSchema>;

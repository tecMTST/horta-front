import { object, string, TypeOf } from 'zod';

const UsuarioSchema = object({
  email: string().email(),
  name: string(),
  token: string(),
  details: object({}).optional(),
});

export type Usuario = TypeOf<typeof UsuarioSchema>;

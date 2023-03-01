import { object, string, TypeOf } from 'zod';

export const loginSchema = object({
  email: string({ required_error: 'Email é obrigatório' }).email(),
  password: string({ required_error: 'Senha é obrigatória' }).min(3).max(12),
});

export type Login = TypeOf<typeof loginSchema>;
export type LoginInput = TypeOf<typeof loginSchema>;

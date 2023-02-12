import { object, string, TypeOf } from 'zod';

export const loginSchema = object({
  email: string().email(),
  password: string().min(3).max(12),
});

export type Login = TypeOf<typeof loginSchema>;
export type LoginInput = TypeOf<typeof loginSchema>;

import { array, object, string, TypeOf } from 'zod';

const HortaSchema = object({
  nome: string(),
  descricao: string(),
  endereco: string(),
  canteiros: array(object({})),
});

export type Horta = TypeOf<typeof HortaSchema>;

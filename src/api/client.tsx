import axios from 'axios';
import { Horta } from 'types/Horta';
import { LoginInput } from 'types/Login';
import { Usuario } from 'types/Usuario';
import { BackendPaths } from './paths';
import { mockAll } from './mocks';

mockAll(axios);
export const loginUser = async (
  login: LoginInput,
): Promise<{ token: string }> => {
  const res = await axios.get<string>(BackendPaths.LOGIN, {
    params: { ...login },
  });
  return { token: res.data };
};

export const getUserProfile = async (token: string): Promise<Usuario> => {
  const res = await axios.get<Usuario>(BackendPaths.USER, {
    headers: { Authorization: token },
  });
  return res.data as Usuario;
};

export const getHortas = async (token: string): Promise<Array<Horta>> => {
  const res = await axios.get<Array<Horta>>(BackendPaths.HORTAS, {
    headers: { Authorization: token },
  });
  var hortas = res.data as Array<Horta>;
  return hortas;
};

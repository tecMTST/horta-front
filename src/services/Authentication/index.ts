import { configureAuth } from 'react-query-auth';
import { storage } from '../utils';
import { LoginInput } from 'types/Login';
import { Usuario } from 'types/Usuario';
import { login } from 'api/client';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};

async function userFn() {
  const user = storage.getUser() as Usuario;
  if (user === null || user.token === undefined || user.token.length <= 0) {
    return null;
  }
  return user;
}

async function loginFn(data: LoginInput) {
  const response = await login(data);

  if (response.data.length > 0) {
    const token = response.data;
    let user = { email: data.email, name: '' } as Usuario;

    if (token && token.length > 0) {
      user.token = token;
      storage.setUser(user);
      return user;
    }
  }
}

async function registerFn(data: LoginInput) {
  //TODO
  return {} as Usuario;
}

async function logoutFn() {
  storage.clearUser();
  return null;
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });

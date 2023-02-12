import { configureAuth } from 'react-query-auth';
import { getUserProfile } from '../../api/client';
import { storage } from '../utils';
import { LoginInput } from 'types/Login';
import { Usuario } from 'types/Usuario';
import { loginUser } from 'api/client';
import { isError } from '@tanstack/react-query';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};

async function handleUserResponse(data: Usuario) {
  const { token } = data;
  if (token && token.length > 0) {
    storage.setToken(token);
    return data as Usuario;
  }
  console.log('err');
  return Promise.reject(data);
}

async function userFn() {
  const user = await getUserProfile(storage.getToken());
  return user ?? null;
}

async function loginFn(data: LoginInput) {
  const response = await loginUser(data);
  if (isError(response)) {
    return Promise.reject(response);
  } else {
    const { token } = response as { token: string };
    const user = await getUserProfile(token);
    const authenticatedUser = await handleUserResponse(user as Usuario);
    return authenticatedUser;
  }
}

async function registerFn(data: LoginInput) {
  //TODO
  return null;
}

async function logoutFn() {
  storage.clearToken();
  return null;
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });

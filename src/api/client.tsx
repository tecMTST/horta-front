import axios, { AxiosRequestConfig, isAxiosError } from 'axios';
import { storage } from 'services/utils';
import { LoginInput } from 'types/Login';
import { Usuario } from 'types/Usuario';
import { BackendEntities } from './utils';

export interface QueryProps {
  url: string;
  token: string;
}

export interface MutationProps {
  url: string;
  token: string;
  variables: any;
}

const BASE_URL = 'https://api-horta.herokuapp.com'; //process.env.REACT_APP_BACKEND_PATH;

export async function defaultQuery<T>({ queryKey }): Promise<T | null> {
  const { url } = queryKey;
  const user = storage.getUser() as Usuario;
  if (typeof url === 'string') {
    try {
      let options = {
        headers: { Authorization: `Bearer ${user.token}` },
      } as AxiosRequestConfig;

      const { data } = await axios.get<T>(
        `${BASE_URL}/${url.toLowerCase()}`,
        options,
      );

      return data;
    } catch {
      console.log('dq: catch');
      return null;
    }
  }
  throw new Error('Invalid QueryKey');
}

export async function defaultMutation<T>({ mutationKey }): Promise<T> {
  const [url, variables] = mutationKey;
  const user = storage.getUser() as Usuario;
  if (typeof url === 'string') {
    let options = {
      headers: { Authorization: `Bearer ${user.token}` },
    } as AxiosRequestConfig;
    if (variables !== undefined && variables !== null) {
      options.params = JSON.stringify(variables);
    }

    const { data } = await axios.post<T>(
      `${BASE_URL}/${url.toLowerCase()}`,
      options,
    );

    return data;
  }
  throw new Error('Invalid QueryKey');
}

export async function login(
  credentials: LoginInput,
): Promise<{ data: string }> {
  try {
    const { data } = await axios.post<{ data: string }>(
      `${BASE_URL}/${BackendEntities.LOGIN}`,
      credentials,
    );
    return data;
  } catch (ex) {
    if (isAxiosError(ex)) {
      console.log(ex.toJSON());
      return Promise.reject(ex.toJSON());
    }
    console.log(ex);
    return Promise.reject(ex);
  }
}

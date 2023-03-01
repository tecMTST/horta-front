import { Usuario } from 'types/Usuario';

function clearLocal(key: string) {
  window.localStorage && window.localStorage.removeItem(key);
}

function saveLocal(key: string, value: any) {
  window.localStorage && localStorage.setItem(key, value);
}

function getFromLocal(key: string): string | null {
  return window.localStorage
    ? (localStorage.getItem(key) as string) || null
    : null;
}

export const storage = {
  getUser: () =>
    JSON.parse(getFromLocal('usr-data') || 'null', (_, value) => {
      return value as Usuario;
    }),
  setUser: (user: Usuario) => {
    saveLocal('usr-data', JSON.stringify(user));
  },
  clearUser: () => {
    clearLocal('usr-data');
  },
};

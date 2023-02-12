function clearLocal(key: string) {
  window.localStorage.removeItem(key);
}

function saveLocal(key: string, value: string) {
  window.localStorage && localStorage.setItem(key, value);
}

function getFromLocal(key: string): string | null {
  return window.localStorage
    ? (localStorage.getItem(key) as string) || null
    : null;
}

export const storage = {
  getToken: () => JSON.parse(getFromLocal('token') || 'null'),
  setToken: (token: string) => saveLocal('token', JSON.stringify(token)),
  clearToken: () => clearLocal('token'),
};

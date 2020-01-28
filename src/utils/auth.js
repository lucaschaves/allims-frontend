import { TOKEN_KEY, USER_KEY } from "./constantes";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(USER_KEY) !== null;

export const setToken = token => localStorage.setItem(TOKEN_KEY, token);
export const setUser = user => localStorage.setItem(USER_KEY, user);

export const setLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

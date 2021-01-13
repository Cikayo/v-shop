import Cookie from 'js-cookie';
// user const token
export const USER_TOKEN = 'token';

export function getUserToken() {
  return Cookie.get(USER_TOKEN);
}
export function setUserToken(token) {
  Cookie.set(USER_TOKEN, token);
}
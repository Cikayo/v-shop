import Cookies from 'js-cookie';
// user const token
export const USER_TOKEN = 'token';

export function getUserToken() {
  return Cookies.get(USER_TOKEN);
}
export function setUserToken(token) {
  Cookies.set(USER_TOKEN, token);
}
export function removeUserToken() {
  Cookies.remove(USER_TOKEN);
}
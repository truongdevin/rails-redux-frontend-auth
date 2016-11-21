import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const LOAD_AUTH = "LOAD_AUTH";

const getCSRF = () => {
  const el = document.getElementsByTagName("meta");
  for (let i = 0; i < el.length; i++) {
    if (el[i].getAttribute("name") === "csrf-token") {
      return el[i].getAttribute("content");
    }
  }

  return null;
};

export function signIn(user) {
  const request = axios.post('api/sessions', { user }, {
    headers: { "X-CSRF-TOKEN": getCSRF() }
  });

  return {
    type: SIGN_IN,
    payload: request
  };
}

export function signOut() {
  const request = axios.delete('api/sessions', {
    headers: { "X-CSRF-TOKEN": getCSRF() }
  });

  return {
    type: SIGN_OUT,
    payload: request
  };
}

export function loadAuth() {
  const request = axios.get('api/sessions');

  return {
    type: LOAD_AUTH,
    payload: request
  };
}

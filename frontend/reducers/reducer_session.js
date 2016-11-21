import { SIGN_IN, SIGN_OUT, LOAD_AUTH } from '../actions/index';

const INITIAL_STATE = { auth: {}, checked: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SIGN_IN:
    // if (action.payload.status !== 200) {
    //   throw Error
    // }
    return { ...state, auth: action.payload.data }

    case SIGN_OUT:
    return { ...state, auth: {} };

    case LOAD_AUTH:
    return { ...state, auth: action.payload.data, checked: true }

    default:
    return state;
  }
}

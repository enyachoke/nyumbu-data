import * as types from '../actions';

export default function(state = {}, action) {
  const user = action.user;
  switch(action.type) {
    case types.SET_USER:
      return { ...state, ...user };
    default:
      return state;
  }
};
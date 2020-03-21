import * as types from './index';

export const setUserAction = (user) => {
  return {
    type: types.SET_USER,
    user: user
  }
};
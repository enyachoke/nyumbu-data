import jwt from 'jwt-decode';
export function setItem(name, value) {
  localStorage.setItem(name, value);
}

export function getItem(name) {
  return localStorage.getItem(name);
}

export function checkToken(name) {

  let user = getItem('token');
  if (user) {
    return true;
  } 
  return false;
}

export function getUser(){
  let user = getItem('token');
  return jwt(user);
}
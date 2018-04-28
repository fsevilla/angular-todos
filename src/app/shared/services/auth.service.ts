import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  setToken(token) {
  	localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
  	return localStorage.getItem('token');
  }

  getAuthorization() {
  	let token = JSON.parse(this.getToken());
  	return `${token.token_type} ${token.access_token}`;
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  public loginStatus: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }

  setToken(token) {
  	localStorage.setItem('token', JSON.stringify(token));
    this.loginStatus.next(true);
  }

  getToken() {
  	return localStorage.getItem('token');
  }

  getAuthorization() {
  	let token = JSON.parse(this.getToken());
  	return `${token.token_type} ${token.access_token}`;
  }

  isLoggedIn() {
  	return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  setPermissions(permissions) {
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }

  getPermissions() {
    return localStorage.getItem('permissions') ? JSON.parse(localStorage.getItem('permissions')) : null;
  }

}

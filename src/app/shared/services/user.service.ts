import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  register(data:any): Promise<any> {
  	console.log('Will create user: ', data);
  	return this.http.post(`${environment.api}register`, data)
  		.map(response => response.json())
  		.toPromise();
  }

  login(credentials:any): Promise<any> {
  	let data = Object.assign({}, credentials, environment.client);
  	return this.http.post(`${environment.authApi}oauth/token`, data)
  		.map(response => {
        this.authService.setToken(response.json());
        return response.json();
      })
  		.toPromise();
  }

}

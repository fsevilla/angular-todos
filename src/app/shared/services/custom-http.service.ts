import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class CustomHttpService {

  constructor(
  	private http: Http,
  	private authService: AuthService
  ) { }

  get(url:string) {
  	const headers = new Headers();
  	headers.append('Accept', 'application/json');
  	headers.append('Authorization', this.authService.getAuthorization());
  	return this.http.get(url, {headers});
  }

  post(url:string, data:any) {
  	const headers = new Headers();
  	headers.append('Accept', 'application/json');
  	headers.append('Authorization', this.authService.getAuthorization());
  	return this.http.post(url, data, {headers});
  }

}

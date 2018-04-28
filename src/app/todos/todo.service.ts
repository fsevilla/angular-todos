import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from './../../environments/environment';
import { AuthService } from './../shared/services/auth.service';
import 'rxjs/Rx';

@Injectable()
export class TodoService {
  private todos: Array<string> = [];
  
  constructor(
  	private http: Http,
    private authService: AuthService
  ) { }

  getTodos() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.authService.getToken());
  	return this.http.get(`${environment.api}todos`, {headers})
  		.map(response => response.json())
  		.toPromise();
  }

  getTodoDetails(id: number): Promise<any> {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.authService.getToken());
    return this.http.get(`${environment.api}todos/${id}`, {headers})
      .map(response => response.json())
      .toPromise();
  }

  addTodo(todo: string): boolean {
  	if(todo && this.todos.indexOf(todo) === -1) {
  		this.todos.push(todo);
  		return true;
  	}
  	else {
  		return false;
  	}
  }

}

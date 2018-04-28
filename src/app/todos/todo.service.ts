import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from './../../environments/environment';
import 'rxjs/Rx';

import { AuthService } from './../shared/services/auth.service';
import { CustomHttpService } from './../shared/services/custom-http.service';

@Injectable()
export class TodoService {
  private todos: Array<string> = [];
  
  constructor(
  	private http: Http,
    private authService: AuthService,
    private customHttp: CustomHttpService
  ) { }

  getTodos() {
    
  	return this.customHttp.get(`${environment.api}todos`)
  		.map(response => response.json())
  		.toPromise();
  }

  getTodoDetails(id: number): Promise<any> {
    return this.customHttp.get(`${environment.api}todos/${id}`)
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

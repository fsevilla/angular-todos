import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class TodoService {
  private todos: Array<string> = [];
  
  constructor(
  	private http: Http
  ) { }

  getTodos() {
  	return this.http.get(`${environment.api}todos/all`)
  		.map(response => response.json())
  		.toPromise();
  }

  getTodoDetails(id: number): Promise<any> {
    return this.http.get(`${environment.api}todos/${id}`)
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

import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todos: Array<string> = [];
  constructor() { }

  getTodos(): Array<string> {
  	return this.todos;
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

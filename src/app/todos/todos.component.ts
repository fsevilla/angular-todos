import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Array<string> = [];
  public status: string = 'Loading todos!';
  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
  	this.todos = this.todoService.getTodos();
  }
  handleNewTodo(todo: any) {
	if(this.todoService.addTodo(todo)) {		
		this.status = 'Todo Added!';
		this.todos = this.todoService.getTodos();
	}
	else {
		this.status = 'No records found!';
		console.log("Something goes wrong!");
	}
  }

}

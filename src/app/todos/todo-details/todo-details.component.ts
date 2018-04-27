import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../todo.service';

@Component({
  selector: 'todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  public todo: any;
  constructor(
  	private activatedRoute: ActivatedRoute,
  	private todoService: TodoService
  ) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		console.log('Todo ID: ', params.id);
  		this.getDetails(params.id);
  	});
  }

  getDetails(id: number) {
  	this.todoService.getTodoDetails(id)
  		.then(response => {
  			this.todo = response;
  		})
  		.catch(error => {
  			console.log('Error: ', error);
  		});
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoService {
	private todos=[];
	private archivedTodos= [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }
  archivedTodo(todoIndex){
  	let todoToBeArchived =  this.todos[todoIndex];
  	this.todos.splice(todoIndex, 1);
  	this.archivedTodos.push(todoToBeArchived);
  }


  getTodos(){
  	return this.todos;
  }
  getArchivedTodos(){
  	return this.archivedTodos;
  }


  addTodo(todoText){
  	this.todos.push(todoText)
  }
  editTodo(todo, todoIndex){
    this.todos[todoIndex]= todo;
  }

}

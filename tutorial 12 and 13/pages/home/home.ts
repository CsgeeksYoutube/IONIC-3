import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray } from 'ionic-angular';
import { ArchivedTodosPage} from "../archived-todos/archived-todos";
import { TodoService } from '../../providers/todo-service/todo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public todos= [];
  public reorderIsEnabled= false;

  constructor(private todoService: TodoService,public navCtrl: NavController,private alertController:AlertController) {
    this.todos= this.todoService.getTodos();
  }
  archiveTodo(todoIndex){
    this.todoService.archivedTodo(todoIndex);
  }



  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }


  toggleReorder(){
    this.reorderIsEnabled= !this.reorderIsEnabled;
  }
  itemReordered($event){
    reorderArray(this.todos, $event);

  }


  openTodoAlert(){
  	let addTodoAlert = this.alertController.create({
  		title:"Add A todo",
  		message:"Enter your todo",
  		inputs:[
  		{
  			type:"text",
  			name:"addTodoInput"
  		}],
  		buttons:[
  		{
  			text:"Cancel"
  		},
  		{
  			text:"Add Todo",
  			handler:(inputData)=>{
  				let todoText;
  				todoText= inputData.addTodoInput;
  				this.todoService.addTodo(todoText);
  			}

  		}]
  	});
  	addTodoAlert.present()
  }

  }
 



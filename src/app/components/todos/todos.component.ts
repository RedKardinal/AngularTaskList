import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  // private = only here todoService = anthing : todoService = bind to import
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // .subscribe is like .then
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // console.log for console
    console.log('Delete me!');
    // Delete from UI (Can put in subscribe)
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete from Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    // console.log for console
    console.log('Added!');
    // Add through Server
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });

  }

}

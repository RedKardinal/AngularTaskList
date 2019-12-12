import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // Toggles UI
    todo.completed= !todo.completed;
    // Toggles Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log());
    // console.log for console
    console.log('toggle');
  } // checks toggle

  onDelete(todo) {
    this.deleteTodo.emit(todo)
    // console.log for console
    console.log('delete');
  } // checks delete

}

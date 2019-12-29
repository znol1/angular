import {Component, OnInit} from '@angular/core';
import {Smth, Todo, TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title: string = '';
  constructor(public todosService: TodosService) { }

  ngOnInit() {
  }
  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  addSmth() {
    const smth: Smth = {
      title: this.title,
      id: Date.now(),
      online: Boolean(Math.round(Math.random())),
      date: new Date()
    };
    this.todosService.addSmth(smth);
    this.title = '';
  }
}

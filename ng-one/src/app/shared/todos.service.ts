import {Injectable} from '@angular/core';

export interface Smth {
  id: number;
  title: string;
  online: boolean;
  date?: any;
}
@Injectable({providedIn: 'root'})
export class TodosService {
  public todos = [
    {id: 1, title: 'Один', online: false, date: new Date()},
    {id: 2, title: 'Два', online: true, date: new Date()},
    {id: 3, title: 'Три', online: false, date: new Date()},
    {id: 4, title: 'Четыре', online: false, date: new Date()},
    {id: 5, title: 'Пять', online: false, date: new Date()},
    {id: 6, title: 'Шесть', online: true, date: new Date()},
    {id: 7, title: 'Семь', online: true, date: new Date()},
    {id: 8, title: 'Восемь', online: false, date: new Date()},
    {id: 9, title: 'Девять', online: false, date: new Date()},
    {id: 10, title: 'Десять', online: false, date: new Date()},
  ];

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].online = !this.todos[idx].online;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  addSmth(smth: Smth) {
    this.todos.push(smth);
  }
}

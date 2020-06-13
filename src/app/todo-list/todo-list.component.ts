import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [
    new Todo(1,'Learn Angular and become fullstack developer',false,new Date()),
    new Todo(2, 'Resume Spring security which was stopped', false, new Date()),
    new Todo(3, 'Revise Docker and Azure', false, new Date()),
    new Todo(4, 'Start learn Kubernetes', false, new Date()),
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { Task } from './task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  lista: Array<Task> = [];

  constructor(private tasksService: TasksService){
    this.lista = this.tasksService.taskList;

  }

}

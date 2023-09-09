import { Component } from '@angular/core';
import { Task } from './task';
import { TasksService } from '../tasks.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  lista: Array<Task> = [];

  constructor(
    private tasksService: TasksService,
    private router: Router
    ){
    this.lista = this.tasksService.getCurrentUserTasks();

  }

  goToEdit(id?: number){
    this.router.navigate(["/main/edit-task/"+id])
  }

}

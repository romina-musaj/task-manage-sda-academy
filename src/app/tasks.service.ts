import { Injectable } from '@angular/core';
import { Task } from './tasks-list/task';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskList: Array<Task> = [];

  constructor(private usersService: UsersService) { }

  addTask(data: Task): void {

    const task = {
      title: data.title,
      description: data.description,
      id: this.taskList.length,
      userId: this.usersService.currentUser?.id
    }
   this.taskList.push(task);
  }
}

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

  editTask(id: number, data: Task): void {
  const task = this.taskList.find(task => task.id == id) as Task;
  task.title = data.title;
  task.description = data.description;
  }

  getCurrentUserTasks(){
    return this.taskList.filter(task => task.userId === this.usersService.currentUser?.id)
  }
}

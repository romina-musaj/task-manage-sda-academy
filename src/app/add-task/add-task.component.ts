import { Component } from '@angular/core';
import { Task } from '../tasks-list/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  addTaskForm: Task = {};
  showSuccessMessage!: boolean;

  constructor(private tasksService: TasksService){
  }

  addTask(): void {
   this.tasksService.addTask(this.addTaskForm);
   this.showSuccessMessage = true;
   this.addTaskForm = {};

  }

}

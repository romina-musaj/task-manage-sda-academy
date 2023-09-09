import { Component } from '@angular/core';
import { Task } from '../tasks-list/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  addTaskForm: Task = {};

  addTask(): void {
    console.log(this.addTaskForm);
  }

}

import { Component } from '@angular/core';
import { Task } from '../tasks-list/task';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent {
  addTaskForm: Task = {};
  showSuccessMessage!: boolean;
  id: string;

  constructor(
    private tasksService: TasksService,
    private activate: ActivatedRoute,
    private router: Router
    ){

    this.id =   this.activate.snapshot.paramMap.get('id') as string;
    if(this.id){
    const data = this.tasksService.taskList.find(task => task.id === Number(this.id));
     this.addTaskForm.title = data?.title;
     this.addTaskForm.description = data?.description;
    }
   
  }

  save(): void {
    if(!this.id){
      this.tasksService.addTask(this.addTaskForm);
      this.showSuccessMessage = true;
      this.addTaskForm = {};
    }
    else {
      this.tasksService.editTask(Number(this.id), this.addTaskForm);
      this.router.navigate(["/main/tasks-list"]);

    }

  }

}

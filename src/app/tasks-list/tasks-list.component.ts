import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  lista: Array<Task> = [
    {
      id: 1,
      title: "Tasku i pare",
      description: "Pershkrim i taskur te pare",
      status: false,
    },
    {
      id: 2,
      title: "Tasku i dyte",
      description: "Pershkrim i taskut te dyte",
      status: true
    }
  ];

}

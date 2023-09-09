import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddEditTaskComponent } from './add-task/add-edit-task.component';
import { MenuComponent } from './menu/menu.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', 
    component: MenuComponent,
    canActivate: [authGuard],
    children: [
      { path: 'tasks-list', component: TasksListComponent },
      { path: 'add-task', component: AddEditTaskComponent },
      {path: 'edit-task/:id', component: AddEditTaskComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

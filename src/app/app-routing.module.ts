import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent },
  {path: 'tasks-list', component: TasksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

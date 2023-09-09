import { Component } from '@angular/core';
import { Login } from './login';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: Login = {};
  showMessage: boolean = false;

  constructor(private usersService: UsersService, private router: Router){

  }

  submit():void {
   const user = this.usersService.login(this.loginForm);
   if(user){
    this.router.navigate(["/main/tasks-list"]);
   }
   else {
    this.showMessage = true;
   }
  }


}

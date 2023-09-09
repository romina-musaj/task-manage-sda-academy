import { Component } from '@angular/core';
import { RegisterData } from './register-data';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: RegisterData = {};

  constructor(private usersService: UsersService,
    private router: Router) { }


  submit(): void {
    this.usersService.addUser(this.registerForm);
    this.router.navigate(['/login']);
  }

}

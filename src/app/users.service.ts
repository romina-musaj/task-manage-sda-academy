import { Injectable } from '@angular/core';
import { User } from './user';
import { RegisterData } from './register/register-data';
import { Login } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersList: Array<User> = [];

  constructor() { }

  login(data:Login): User | undefined {
    return this.usersList.find(user => user.email === data.email && user.password === data.password);
  }

  addUser(data: RegisterData){
    const user: User = {
     id: this.usersList.length,
     name: data.name,
     surname: data.surname,
     email: data.email,
     password: data.password
    };
    this.usersList.push(user);
  }
}

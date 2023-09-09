import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public usersService: UsersService,
    private router: Router){

  }

  logout(){
    this.usersService.setCurrentUser(undefined);
    this.router.navigate(["/login"]);
  }


}

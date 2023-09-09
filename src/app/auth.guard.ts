import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isUserLogged = !!inject(UsersService).currentUser;
  if(isUserLogged){
    return true;
  }
  else {
    inject(Router).navigate(["/login"]);
  }
  return false;
};

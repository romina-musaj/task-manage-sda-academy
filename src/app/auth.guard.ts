import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsersService } from './users.service';

export const authGuard: CanActivateFn = (route, state) => {
  return !!inject(UsersService).currentUser;
};

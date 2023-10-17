import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService =inject(AuthenticationService);
  const router=inject(Router);
  
  if(authService.isLoggedIn$.value){
    return true;
  }

  router.navigateByUrl('/authentication/login');
  return false;
  
};

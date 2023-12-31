import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service';
/*export const authGuard: CanActivateFn = (route, state) => {
  return true;
};*/
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
    
  }
  canActivate()
  {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    alert('You are not logged in!');
    this.router.navigate(['login']);
    return false;
}
}
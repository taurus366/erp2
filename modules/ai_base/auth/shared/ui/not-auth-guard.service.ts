import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  async canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): Promise<boolean> {
    if (this.userService.isAuth) {
      await this.router.navigate(['/']);
    }
    return !this.userService.isAuth;
  }
}

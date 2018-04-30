import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { UserService } from './../services/user.service';

@Injectable()
export class PermissionsGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasPermissions(next.data.resource, next.data.permissions);
  }

  hasPermissions(resource, actions) {
  	console.log('Auth permissions: ', this.authService.getPermissions());

  	if(this.userService.hasPermissions(resource, actions)) {
  		return true;
  	} else {
  		this.router.navigate(['/forbidden']);
  		return false;
  	}
  }
}

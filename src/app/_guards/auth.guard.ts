import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService, UserService} from "../_services";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(
	    private authService: AuthorizationService,
      private router: Router
    ) {}

  canActivate(): boolean {
	  if (this.authService.authenticated) {
	    return true;
    } else {
	    this.router.navigate(['/login'])
      return false;
    }
  }



}

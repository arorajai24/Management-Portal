import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {

    if (!localStorage.getItem('token')) {
      this.router.navigate([""]);
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    } 

    return true;
  }
}

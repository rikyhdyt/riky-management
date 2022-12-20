import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router:Router,
    private loginService:LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.loginService.isUserLoggedIn()){
      alert("Silahkan login terlebih dahulu");
      this.router.navigate(['login'], {queryParams: {lastURL:route.url}});
      return false;
    }

    return true;
  }
}

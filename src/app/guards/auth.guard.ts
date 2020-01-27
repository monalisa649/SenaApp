import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
//import { userInfo } from 'os';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot)
  :Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree{
    if(this.authService.isLogged){
      return true;
    }
   console.log('Acceso denegado');
   this.router.navigateByUrl('login');
   return false;//acceso a usuarios registrados
  }
 
}

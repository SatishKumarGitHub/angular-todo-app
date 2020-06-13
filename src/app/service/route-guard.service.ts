import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { StaticAuthenticationService } from './static-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {



  constructor(private staticAuthenticationService: StaticAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.staticAuthenticationService.isLoggedInUser()){
      return true;
    }else{
       this.router.navigate(['/login']);
      return true;

    }
  }
}

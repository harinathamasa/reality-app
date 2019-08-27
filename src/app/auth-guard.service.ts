import { AdminService } from './admin-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private adminService:AdminService,private router:Router) { }

  canActivate(route,state:RouterStateSnapshot){
     if(this.adminService.isLoggedIn()){
       return true;
     }
   this.router.navigate(['admin'],{queryParams:{returnUrl:state.url}});
   return false;
  }
}

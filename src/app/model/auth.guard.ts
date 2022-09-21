import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router,private authSevice:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.authSevice.authenticated){
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }
}
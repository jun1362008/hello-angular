import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, @Inject('auth') private authService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }

  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;
    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }

}

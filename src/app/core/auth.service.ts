import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Auth } from '../domain/entities';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  auth: Auth = { hasError: true, redirectUrl: '', errMsg: 'not logged in' };
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  constructor(private http: Http, @Inject('user') private userService) { }

  getAuth(): Observable<Auth> {
    return this.subject.asObservable();
  }

  unAuth(): void {
    this.auth = Object.assign(
      {},
      this.auth,
      {user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in'}
    );
    this.subject.next(this.auth);
  }

  loginWithCredentials(username: string, password: string): Observable<Auth> {
    return this.userService
      .findUser(username)
      .map(user => {
        let auth = new Auth();

        if(null === user) {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if(password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          auth.errMsg = null;
        } else {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }

        this.auth = Object.assign({}, auth);
        this.subject.next(this.auth);
        return this.auth;
      })
  }

}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { User } from '../domain/entities';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  getUser(userId: number): Observable<User> {
    const url = `${this.api_url}/userId=${userId}`;
    return this.http.get(url)
      .map(res => res.json() as User);
  }

  findUser(username: string): Observable<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
      .map(res => {
        let users = res.json() as User[];
        return (users.length)? users[0]: null;
      })
  }

}

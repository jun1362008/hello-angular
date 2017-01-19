import { Component, Inject, OnInit } from '@angular/core';
import { Auth } from './domain/entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  auth: Auth;
  title = 'This is a hello-angular app';

  constructor(@Inject('auth') private service, private router: Router){
  }
  ngOnInit() {
    this.service
        .getAuth()
        .subscribe(auth => this.auth = Object.assign({}, auth));
  }
  login() {
    this.router.navigate(['login']);
  }
  logout(){
    this.service.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }
}

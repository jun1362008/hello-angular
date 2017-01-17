import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
        <input type="text" #usernameRef>
        <input type="password" #passwordRef>
        <button (click)="onClick(usernameRef.value,passwordRef.value)">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(username,password) {
    console.log('username:',username,'\n'+'password:',password);
  }

}

/**
 * Created by malianghang on 2017/1/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
            imports: [ RouterModule.forChild(routes) ],
            exports: [ RouterModule ]
          })
export class LoginRoutingModule { }

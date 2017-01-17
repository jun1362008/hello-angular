/**
 * Created by malianghang on 2017/1/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

export const routes: Routes = [
  {
    path: 'todo/:filter',
    component: TodoComponent
  }
];
export const routing = RouterModule.forChild(routes);
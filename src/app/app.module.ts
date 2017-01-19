import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MdlModule } from 'angular2-mdl';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MdlModule,
    TodoModule,
    CoreModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

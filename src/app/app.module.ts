import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdlModule,
    TodoModule,
    CoreModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

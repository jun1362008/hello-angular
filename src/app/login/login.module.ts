/**
 * Created by malianghang on 2017/1/19.
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BingImageService } from './bing-image.service';

@NgModule({
            imports: [
              SharedModule,
              LoginRoutingModule
            ],
            declarations: [ LoginComponent ],
            providers: [
              { provide: 'bing', useClass: BingImageService }
            ]
          })
export class LoginModule { }

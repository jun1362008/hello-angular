import { Component, Inject, OnDestroy, trigger, state, style, animate, transition } from '@angular/core';
import { Auth, Image } from '../domain/entities';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
                              })),
      state('active', style({
        transform: 'scale(1.1)'
                            })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnDestroy {

  username = '';
  password = '';
  auth: Auth;
  photo = 'assets/login_default_bg.jpg';
  slides: Image[] = [];
  subscription: Subscription;
  loginBtnState: string = 'inactive';

  constructor(@Inject('auth') private service,
    @Inject('bing') private bingService,
    private router: Router) {
    this.bingService.getImageUrl()
        .subscribe((images: Image[]) => {
          this.slides = [...images];
          this.rotateImages(this.slides);
        })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  rotateImages(arr: Image[]) {
    const length = arr.length;
    let i = 0;
    setInterval(() => {
      i = (i + 1) % length;
      this.photo = this.slides[i].contentUrl;
    }, 4000)
  }

  toggleLoginState(state: boolean) {
    this.loginBtnState = state ? 'active' : 'inactive';
  }

  onSubmit() {
    this.service.loginWithCredentials(this.username, this.password)
        .subscribe(auth => {
          this.auth = Object.assign({}, auth);
          if(!auth.hasError) {
            this.router.navigate(['todo']);
          }
        });
  }

}
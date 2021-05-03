import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { SocialloginService } from './sociallogin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginparserService {

  socialUser : SocialUser;
  logStatus: boolean;  
  response: any;

  constructor(
    private socialloginService : SocialloginService,
    private router : Router,
    private socialAuthService: SocialAuthService
  ) { 
    this.logStatus = false;
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialUser => {
      this.Savesresponse(socialUser);
    });
    this.logStatus=true;
  }

  Savesresponse(socialUser : SocialUser){
    this.socialloginService.Savesresponse(socialUser).subscribe((res : any)=>{
      this.socialUser = res;
      this.response = res.userDetail;
      console.log(res);
      localStorage.setItem('id', socialUser.id);
      localStorage.setItem('token', socialUser.authToken);
      localStorage.setItem('name', socialUser.name);
      localStorage.setItem('email', socialUser.email);
      localStorage.setItem('photoUrl', socialUser.photoUrl);
      this.router.navigate([`/dashboard`]); 
    })
  }

  logOut(): void {
    this.socialloginService.Removeresponse(localStorage.getItem('id')).subscribe((res : any)=>{
      console.log(res);
    });
    this.socialAuthService.signOut();
    console.log("logging out");
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
      localStorage.removeItem('email');
    this.logStatus=false;
    this.router.navigate([`/`]); 
  }

  isLoggedIn()
  {
    return this.logStatus;
  }
}

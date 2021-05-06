import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { httpInterceptProviders } from './index';
import { AuthguardService } from './authguard.service';
import { SearchComponent } from './search/search.component';
import { FormsModule} from '@angular/forms';
import { ShowallComponent } from './showall/showall.component';
import { RegisterComponent } from './register/register.component';
import { TrendsComponent } from './trends/trends.component';
import { LogsComponent } from './logs/logs.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogserviceService } from './logservice.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    SearchComponent,
    ShowallComponent,
    RegisterComponent,
    TrendsComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    httpInterceptProviders, HttpClient, AuthguardService,LogserviceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '859429172963-vtq8gbqqitma1cta7br669tc8t1cj8vb.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

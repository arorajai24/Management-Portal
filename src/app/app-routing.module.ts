import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LogsComponent } from './logs/logs.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ShowallComponent } from './showall/showall.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  {
    path : "" , component : IndexComponent , pathMatch : "full"
  },
  {
    path : 'dashboard' , component : DashboardComponent , canActivate : [AuthguardService],
    children : [
      {
        path : 'search' , component : SearchComponent
      },
      {
        path : 'showall' , component : ShowallComponent 
      },
      {
        path : 'register' , component : RegisterComponent
      },
      {
        path : 'trends' , component : TrendsComponent,
      },
      {
        path : 'logs' , component : LogsComponent
      }
    ]
  },
  {
    path : "**" , redirectTo : "" , pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

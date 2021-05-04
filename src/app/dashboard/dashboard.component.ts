import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginparserService } from '../loginparser.service';
import { LogserviceService } from '../logservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
  photoUrl = localStorage.getItem('photoUrl');

  constructor(private logger : LogserviceService, private loginparser : LoginparserService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.logger.log(this.name + " ("+this.email+") Signed In successfully.");
  }

  onSignOut()
  {
    this.loginparser.logOut();
  }

  onSearch()
  {
    this.router.navigate(['search'] , {relativeTo : this.route});
  }
  onShowAll()
  {
    this.router.navigate(['showall'] , {relativeTo : this.route});
  }
  onRegister()
  {
    this.router.navigate(['register'] , {relativeTo : this.route});
  }
  onTrends()
  {
    this.router.navigate(['trends'] , {relativeTo : this.route});
  }
  onLogs()
  {
    this.router.navigate(['logs'] , {relativeTo : this.route});
  }
}

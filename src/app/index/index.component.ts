import { Component, OnInit } from '@angular/core';
import { LoginparserService } from '../loginparser.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  name : String = localStorage.getItem('name');
  constructor(private loginparser : LoginparserService) { }

  ngOnInit(): void {
  }


  onSignIn()
  {
    this.loginparser.loginWithGoogle();
  }

}

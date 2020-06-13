import { Component, OnInit } from '@angular/core';
import { StaticAuthenticationService } from '../service/static-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedInUser: boolean = false;
  constructor(public staticAuthenticateService: StaticAuthenticationService) {}

  ngOnInit(): void {
  //  this.isLoggedInUser = this.staticAuthenticateService.isLoggedInUser();
  }
}

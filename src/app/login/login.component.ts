import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import { StaticAuthenticationService } from '../service/static-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  isInvalidCredentials: boolean;

  constructor(private router: Router, private staticAuthenticationService: StaticAuthenticationService) {}

  ngOnInit(): void {}

  login() {
    if (this.staticAuthenticationService.authendicate(this.username,this.password)) {
      this.isInvalidCredentials = false;
      this.router.navigate(['/home',this.username]);
    } else {
      this.isInvalidCredentials = true;
    }
  }
}

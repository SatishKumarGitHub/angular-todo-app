import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticAuthenticationService {
  constructor() {}

  authendicate(username, password) {
    if (username === 'satish' && password === 'dummy') {
      sessionStorage.setItem("authenticatedUser",username);
      return true;
    }
    return false;
  }

  isLoggedInUser(){
    let username =sessionStorage.getItem('authenticatedUser');
    return !(username == null);

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

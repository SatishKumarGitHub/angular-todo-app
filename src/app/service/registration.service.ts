import { User } from './../forms/registration/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/';

register(user): Observable<User>{

  this.http.get<any>(this.url + 'welcome').subscribe(
    resp => console.log(resp)
  );
  return this.http.post<User>(this.url + 'register', user);

}

}

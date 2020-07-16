import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationService } from './../../service/registration.service';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public topics = ['Angular', 'Spring Security', 'Devops'];
  public userModel = new User('', '', null, '', 'default', true);
  public username ;


  topicHasError = true;
  constructor(private registrationService: RegistrationService, private router: Router) { }
  ngOnInit(): void {
  }

  validateTopic(value) {

    if ('default' === value) {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
  onFormSubmitOriginal(){
    this.registrationService.register(this.userModel).subscribe(
      resp => {
        this.username = resp.username,
        console.log('username resp ------------------------>', resp);
        this.router.navigate(['/home', this.username]);
        error => console.error(error);
      }
    );

    console.log('username  variable ------------->', this.username);

  //  this.router.navigate(['/home', this.username]);
  }

  onFormSubmit(userObj: User){
    console.log('userObject ...........................>');
    console.log(userObj);



  }

}

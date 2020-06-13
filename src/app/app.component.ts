import { Component } from '@angular/core';
import { User } from './user';

import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf-form';

  // topics = ['Angular', 'Java', 'Devops'];

  // userModel = new User(
  //   'Mahesh',
  //   'Mahesh@gmail.com',
  //   52555662222,
  //   'Java',
  //   'morning',
  //   true
  // );

  // constructor(private formBuilder: FormBuilder) {}

  // onSubmit() {
  //   console.log(this.userModel);
  // }
}

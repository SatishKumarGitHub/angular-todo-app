import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator, passwordShouldNotBeUsername } from 'src/app/shared/password.validator';
import { forbiddenUsername } from 'src/app/shared/username.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveRegistraion: FormGroup;
  constructor(private fb: FormBuilder) {}
  // name = 'dummy';
  get username() {
    return this.reactiveRegistraion.get('username');
  }

  get email() {
    return this.reactiveRegistraion.get('email');
  }
  ngOnInit(): void {
  //  const name = this.username;
    this.reactiveRegistraion = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenUsername(/password/),
            forbiddenUsername(/admin/),
            forbiddenUsername(new RegExp(name)),
          ],
        ],
        email: [''],
        password: ['', [Validators.required,
           passwordShouldNotBeUsername(new RegExp(this.reactiveRegistraion.get('username').value))]],
        confirmPassword: ['', Validators.required],
        address: this.fb.group({
          city: ['', Validators.required],
          state: ['', Validators.required],
          postalCode: ['', Validators.required],
        }),
        subscribe: [''],
      },
      { validator: PasswordValidator }
    );

    this.reactiveRegistraion
      .get('subscribe')
      .valueChanges.subscribe(checkedValue => {
        const email = this.reactiveRegistraion.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  // reactiveRegistraion = new FormGroup({
  //   username: new FormControl('Mahesh'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  onLoadApiData() {
    this.reactiveRegistraion.patchValue({
      username: 'Satish',
      password: 'hello123',
      confirmPassword: 'hello123',
      address: {
        city: 'pune',
        state: 'maharashtra',
        postalCode: '411033',
      },
    });
  }

  onSubmit(){
    console.log(this.reactiveRegistraion.value);
  }
}

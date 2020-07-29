import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  return password && confirmPassword && password.value !== confirmPassword.value
    ? { misMatch: true }
    : null;
}

export function passwordShouldNotBeUsername(forbiddenPassword: RegExp): ValidatorFn {

  return ( control: AbstractControl): {[key: string]: boolean} | null => {
   const password = forbiddenPassword.test(control.value);
   return password ? {forbiddenPassword: true} : null;
  };
}

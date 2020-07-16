import { AbstractControl, ValidatorFn } from '@angular/forms';

// username: ['', [Validators.required, Validators.minLength(3), forbiddenUsername]]
// This is for the validation without passing the value from component form validator
// export function forbiddenUsername(
//   control: AbstractControl): { [key: string]: any } {
//   const forbiddenValue = /admin/.test(control.value);
//   return forbiddenValue ? { forbiddenUsername: { value: control.value } } : null;
// }



export function forbiddenUsername(forbiddeName: RegExp): ValidatorFn{

  return (control: AbstractControl): {[key: string]: any} | null => {

    const forbidden = forbiddeName.test(control.value) ;
    return forbidden ? {forbiddenUsername: { value: control.value}} : null ;
  };

}

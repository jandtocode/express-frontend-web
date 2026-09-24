import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '@auth/services/auth.service';
import { GeneralErrorResponse } from '../../../shared/interfaces/error-response.interface';
import { HttpErrorResponse } from '@angular/common/http';

const passwordsMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  return password === confirmPassword
    ? null
    : { passwordsDoNotMatch: true };
};

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  registerError = '';
registerSuccess = '';


  formUtils = FormUtils;

  registerForm = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      identification: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(10)]],
    },
    {
      validators: passwordsMatchValidator,
    }
  );

  onRegister(): void {
  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  this.registerError = '';
  this.registerSuccess = '';

  this.authService.register(this.registerForm.getRawValue()).subscribe({
    next: (response) => {
      this.registerSuccess = response.message;
      this.registerForm.reset();

      console.log('Registro exitoso:', response);
    },

    error: (error: HttpErrorResponse) => {
      const generalErrorResponse =
        error.error as GeneralErrorResponse;

      this.registerError =
        generalErrorResponse.message ?? 'Error al registrar el usuario.';

      console.error('Error al registrar:', error);
    },
  });
}

}

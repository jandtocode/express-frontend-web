import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, inject, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '@auth/services/auth.service';
import { GeneralErrorResponse } from '../../../shared/interfaces/error-response.interface';
import { ModalErrorComponent } from '../../../shared/components/modal-component/modal-error/modal-error-component';
import { ModalSuccessComponent } from '../../../shared/components/modal-component/modal-success/modal-success-component';

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
  imports: [ReactiveFormsModule, ModalErrorComponent, ModalSuccessComponent],
  templateUrl: './register-page.html',
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  @ViewChild(ModalErrorComponent)
  modal!: ModalErrorComponent;

  @ViewChild(ModalSuccessComponent)
  successModal!: ModalSuccessComponent;

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


    this.authService.register(this.registerForm.getRawValue()).subscribe({
      next: (response) => {
        this.registerForm.reset();

        this.successModal.open(
          response.message,
          'Registro exitoso'
        );

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 4000);
      },

      error: (error: HttpErrorResponse) => {
        const generalErrorResponse =
          error.error as Partial<GeneralErrorResponse>;

        const message =
          generalErrorResponse?.message ??
          (error.status === 0
            ? 'No se pudo conectar con el servidor.'
            : 'Error al registrar el usuario.');

        this.modal.open(
          message,
          'Error de registro',
          error.status
        );

        console.error('Error al registrar:', error);
      },
    });
  }
}
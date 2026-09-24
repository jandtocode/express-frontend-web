import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '@auth/services/auth.service';
import { GeneralErrorResponse } from '../../../shared/interfaces/error-response.interface';
import { ModalErrorComponent } from '../../../shared/components/modal-component/modal-error/modal-error-component';
import { ModalSuccessComponent } from '../../../shared/components/modal-component/modal-success/modal-success-component';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, ModalErrorComponent, ModalSuccessComponent],
  templateUrl: './login-page.html',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  @ViewChild(ModalErrorComponent)
  modal!: ModalErrorComponent;

  @ViewChild(ModalSuccessComponent)
  successModal!: ModalSuccessComponent;

  formUtils = FormUtils;

  loginForm = this.fb.nonNullable.group({
    identification: ['', [Validators.required, Validators.maxLength(15)]],
    password: ['', [Validators.required, Validators.maxLength(15)]],
  });

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }


    this.authService.login(this.loginForm.getRawValue()).subscribe({
      next: (response) => {

        this.successModal.open(
          response.message,
          'Autenticación correcta'
        );

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 4000);
      },

      error: (error: HttpErrorResponse) => {
        const generalErrorResponse =
          error.error as Partial<GeneralErrorResponse>;

        const message =
          generalErrorResponse?.message ??
          (error.status === 0
            ? 'No se pudo conectar con el servidor.'
            : 'Error al iniciar sesión.');

        this.modal.open(
          message,
          'Error de inicio de sesión',
          error.status
        );

        console.error('Error al iniciar sesión:', error);
      },
    });
  }

  goToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
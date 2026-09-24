import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';
import { GeneralErrorResponse } from '../../../shared/interfaces/error-response.interface';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  formUtils = FormUtils;
  loginError = '';

  loginForm = this.fb.nonNullable.group({
    identification: ['', [Validators.required, Validators.maxLength(15)]],
    password: ['', [Validators.required, Validators.maxLength(15)]],
  });

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginError = '';

    this.authService.login(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard/user', response.name]);
      },

      error: (error: HttpErrorResponse) => {

        console.log('Error completo:', error);
        console.log('Status:', error.status);
        console.log('Body:', error.error);


        const generalErrorResponse =
          error.error as GeneralErrorResponse;

        this.loginError =
          generalErrorResponse.message ?? 'Error al iniciar sesión.';
      },
    });


  }

}

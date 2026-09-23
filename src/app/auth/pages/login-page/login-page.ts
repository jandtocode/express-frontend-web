import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';


@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  loginForm = this.fb.nonNullable.group({
    identifier: ['', [Validators.required, Validators.maxLength(15)]],
    password: ['', [Validators.required, Validators.maxLength(15)]],
  });

  onLogin() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginForm.reset({
      identifier: '',
      password: '',
    });
  }



}

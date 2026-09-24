import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginSuccessResponse } from '@auth/interfaces/login-success.interface';
import { RegisterSuccessResponse } from '@auth/interfaces/register-success.interface';
import { LoginUser } from '@auth/interfaces/user-login.interface';
import { RegisterUser } from '@auth/interfaces/user-register.interface';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';

const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {

    private http = inject(HttpClient);

    login(user: LoginUser): Observable<LoginSuccessResponse> {
        return this.http.post<LoginSuccessResponse>(
            `${baseUrl}/auth/login`,
            user
        );
    }

    register(user: RegisterUser): Observable<RegisterSuccessResponse> {
        return this.http.post<RegisterSuccessResponse>(
            `${baseUrl}/auth/register`,
            user
        );
    }
}
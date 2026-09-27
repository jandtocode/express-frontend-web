import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login, LoginResponseBackend } from '@auth/interfaces/login-interface/login.interface';
import { Register, RegisterResponseBackend } from '@auth/interfaces/register-interface/register.interface';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';

const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {

    private http = inject(HttpClient);

    login(user: Login): Observable<LoginResponseBackend> {
        return this.http.post<LoginResponseBackend>(
            `${baseUrl}/auth/login`,
            user,
            { withCredentials: true }
        );
    }

    register(user: Register): Observable<RegisterResponseBackend> {
        return this.http.post<RegisterResponseBackend>(
            `${baseUrl}/auth/register`,
            user
        );
    }
}
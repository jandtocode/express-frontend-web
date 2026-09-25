import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BalanceUserResponseBackend, DashboardDefaultResponseBackend } from '../interfaces/balance-interface/balance-response.interface';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class DashboardService {

    private http = inject(HttpClient);

    dashboardDefault(): Observable<DashboardDefaultResponseBackend> {
        return this.http.get<DashboardDefaultResponseBackend>(
            `${baseUrl}/dashboard`,
        { withCredentials: true });
    }

    balanceUser(): Observable<BalanceUserResponseBackend> {
        return this.http.get<BalanceUserResponseBackend>(
            `${baseUrl}/dashboard/user`,
            { withCredentials: true });
    }

}
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BalanceResponseBackend } from '../interfaces/balance-interface/balance.interface';
import { DashboardDefaultResponseBackend } from '../interfaces/dashboard-interface/dashboard.interface';
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

    balanceUser(): Observable<BalanceResponseBackend> {
        return this.http.get<BalanceResponseBackend>(
            `${baseUrl}/dashboard/user`,
            { withCredentials: true });
    }

}
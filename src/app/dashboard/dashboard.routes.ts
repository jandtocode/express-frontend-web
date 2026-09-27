import { Routes } from '@angular/router';
import { DashboardFrontLayout } from './layout/dashboard-front-layout/dashboard-front-layout';
import { RechargePageComponent } from './pages/recharge-page/recharge-page';
import { DefaultPageComponent } from './pages/default-page/default-page';
import { BalancePageComponent } from './pages/balance-page/balance-page';


export const authRoutes: Routes = [
  {
    path: '',
    component: DashboardFrontLayout,
    children: [
      {
        path: '',
        component: DefaultPageComponent,
      },
      {
        path: 'user',
        component: BalancePageComponent,
      },
      {
        path: 'recharge',
        component: RechargePageComponent,
      },
      {
        path: '**',
        redirectTo: ''
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
import { Routes } from '@angular/router';
import { DashboardFrontLayout } from './layout/dashboard-front-layout/dashboard-front-layout';
import { RechargePageComponent } from './pages/recharge-page/recharge-page';
import { UserPageComponent } from './pages/user-page/user-page';
import { DefaultPageComponent } from './pages/default-page/default-page';


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
        component: UserPageComponent,
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
];
import { Routes } from '@angular/router';
import { DashboardFrontLayout } from './layout/dashboard-front-layout/dashboard-front-layout';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page';
import { NotFoundPage } from '../shared/pages/not-found-page/not-found-page';


export const authRoutes: Routes = [
  {
    path: '',
    component: DashboardFrontLayout,
    children: [
      {
        path: 'user/:name',
        component: DashboardPageComponent,
      },
      // {
      //   path: 'register',
      //   component: RegisterPageComponent,
      // },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];
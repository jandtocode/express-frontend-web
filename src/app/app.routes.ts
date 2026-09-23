import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then((module) => module.authRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-user/dashboard.routes').then((module) => module.authRoutes),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
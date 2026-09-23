import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then((module) => module.authRoutes),
  },
//   {
//     path: 'dashboard',
//     loadComponent: () =>
//       import('./dashboard-user/dashboard-user').then(
//         (module) => module.DashboardUser
//       ),
//   },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
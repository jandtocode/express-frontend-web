import { Routes } from '@angular/router';
import { AuthFrontLayout } from './layout/auth-front-layout/auth-front-layout';
import { LoginPageComponent } from './pages/login-page/login-page';
import { NotFoundPage } from '../shared/pages/not-found-page/not-found-page';
import { RegisterPageComponent } from './pages/register-page/register-page';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthFrontLayout,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];
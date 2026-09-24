import { Component } from '@angular/core';
import { DashboardFrontMenuOptions } from '../../../interfaces/dashboard-front-interface/dashboard-front.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'dashboard-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './options.html',
})
export class DashboardOptionsComponents {

  menuOptions: DashboardFrontMenuOptions[] = [
    {
        icon: 'fa-solid fa-user',
        label: 'Usuario',
        sublabel: 'Información',
        route: '/dashboard/user'
      },
      {
        icon: 'fa-solid fa-id-card',
        label: 'Recargar',
        sublabel: 'Tu viaje',
        route: '/dashboard/recharge'
      }
  ]
}

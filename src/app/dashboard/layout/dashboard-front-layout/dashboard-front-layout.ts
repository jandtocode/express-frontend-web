import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardMenuComponent } from '../../components/dashboard-front-component/menu/menu';

@Component({
  selector: 'app-dashboard-front-layout',
  imports: [RouterOutlet, DashboardMenuComponent],
  templateUrl: './dashboard-front-layout.html',
})
export class DashboardFrontLayout {}

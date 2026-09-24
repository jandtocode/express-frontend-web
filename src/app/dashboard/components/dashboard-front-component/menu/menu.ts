import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardHeaderComponent } from '../header/header';
import { DashboardOptionsComponents } from '../options/options';

@Component({
  selector: 'dashboard-menu',
  imports: [DashboardHeaderComponent, DashboardOptionsComponents],
  templateUrl: './menu.html',
})
export class DashboardMenuComponent {}

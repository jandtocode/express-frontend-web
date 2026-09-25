import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'dashboard-default-page',
  imports: [],
  templateUrl: './default-page.html',
})
export class DefaultPageComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  message = signal('');
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    console.log('Iniciando petición dashboard');

    this.dashboardService.dashboardDefault().subscribe({
      next: (response) => {
        console.log('Respuesta recibida:', response);

        this.message.set(response.message);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error cargando el dashboard:', error);

        this.errorMessage.set('No se pudo cargar la información.');
        this.loading.set(false);
      },
    });
  }
}
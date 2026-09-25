import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { BalanceMapper } from '../../mapper/balance.mapper';
import { BalanceUser } from '../../interfaces/balance-interface/balance.interface';
import { ModalErrorComponent } from '../../../shared/components/modal-component/modal-error/modal-error-component';

@Component({
  selector: 'dashboard-balance-page',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    ModalErrorComponent,
  ],
  templateUrl: './balance-page.html',
})
export class BalancePageComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  @ViewChild(ModalErrorComponent)
  modal!: ModalErrorComponent;

  balance = signal<BalanceUser | null>(null);
  loading = signal(true);

  ngOnInit(): void {
    this.dashboardService.balanceUser().subscribe({
      next: (response) => {
        const balanceUser =
          BalanceMapper.mapBalanceResponseBackToBalanceUser(response);

        console.log('Balance mapeado:', balanceUser);

        this.balance.set(balanceUser);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error cargando el balance:', error);

        this.loading.set(false);

        this.modal.open(
          'No se pudo cargar la información del usuario.',
          'Error al cargar el balance',
          error.status
        );
      },
    });
  }
}
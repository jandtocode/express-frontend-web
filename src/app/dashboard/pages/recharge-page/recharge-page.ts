import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal, ViewChild } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DashboardService } from '../../services/dashboard.service';
import {
  ListOptionsBanks,
  RechargeCalculatedResponseBackend,
} from '../../interfaces/recharge-interface/recharge.interface';
import { FormUtils } from '../../../utils/form-utils';
import { GeneralErrorResponse } from '../../../shared/interfaces/error-response.interface';
import { ModalErrorComponent } from '../../../shared/components/modal-component/modal-error/modal-error-component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'dashboard-recharge-page',
  imports: [ReactiveFormsModule, ModalErrorComponent, CurrencyPipe],
  templateUrl: './recharge-page.html',
})
export class RechargePageComponent {
  private dashboardService = inject(DashboardService);
  private fb = inject(FormBuilder);

  @ViewChild(ModalErrorComponent)
  modal!: ModalErrorComponent;

  formUtils = FormUtils;

  banks: ListOptionsBanks[] = [
    { nameBank: 'PiggyBank Pop' },
    { nameBank: 'Banco Monedita' },
    { nameBank: 'PixelFinance' },
    { nameBank: 'CofreFeliz Bank' },
    { nameBank: 'CashCoon Bank' },
  ];

  rechargeResult = signal<RechargeCalculatedResponseBackend | null>(null);

  rechargeForm = this.fb.nonNullable.group({
    typePayment: ['Efectivo', [Validators.required]],
    bank: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.maxLength(10)]],
    valueRecharge: [0, [Validators.required, Validators.min(1)]],
  });

  onCalculate(): void {
    if (this.rechargeForm.invalid) {
      this.rechargeForm.markAllAsTouched();
      return;
    }

    this.rechargeResult.set(null);

    this.dashboardService
      .rechargeCalculated(this.rechargeForm.getRawValue())
      .subscribe({
        next: (response) => {
          console.log('Respuesta recibida por Angular:', response);

          this.rechargeResult.set(response);
        },

        error: (error: HttpErrorResponse) => {
          const generalErrorResponse =
            error.error as Partial<GeneralErrorResponse>;

          const message =
            generalErrorResponse?.message ??
            (error.status === 0
              ? 'No se pudo conectar con el servidor.'
              : 'No se pudo calcular la recarga.');

          this.modal.open(
            message,
            'Error al calcular la recarga',
            error.status
          );

          console.error('Error al calcular la recarga:', error);
        },
      });
  }
}
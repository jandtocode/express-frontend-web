import {
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';

@Component({
  selector: 'modal-success-component',
  imports: [],
  templateUrl: './modal-success-component.html',
})
export class ModalSuccessComponent {
  @ViewChild('modalSuccess')
  modal!: ElementRef<HTMLDialogElement>;

  title = signal('Operación exitosa');
  message = signal('');

  open(
    message: string,
    title = 'Operación exitosa'
  ): void {
    this.message.set(message);
    this.title.set(title);

    this.modal.nativeElement.showModal();
  }
}
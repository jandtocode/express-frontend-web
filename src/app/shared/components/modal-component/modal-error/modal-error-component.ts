import {
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';

@Component({
  selector: 'modal-error-component',
  imports: [],
  templateUrl: './modal-error-component.html',
})
export class ModalErrorComponent {
  @ViewChild('modalError')
  modal!: ElementRef<HTMLDialogElement>;

  title = signal('Mensaje del servidor');
  message = signal('');
  status = signal(0);

  open(
    message: string,
    title = 'Mensaje del servidor',
    status = 0
  ): void {
    this.message.set(message);
    this.title.set(title);
    this.status.set(status);

    this.modal.nativeElement.showModal();
  }
}
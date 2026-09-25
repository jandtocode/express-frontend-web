import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
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

  @Output()
  closed = new EventEmitter<void>();

  title = signal('Operación exitosa');
  message = signal('');

  open(message: string, title = 'Operación exitosa'): void {
    this.message.set(message);
    this.title.set(title);

    this.modal.nativeElement.showModal();
  }

  close(): void {
    this.modal.nativeElement.close();
    this.closed.emit();
  }
}
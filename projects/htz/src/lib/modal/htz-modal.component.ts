import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'htz-modal',
  standalone: true,
  imports: [],
  templateUrl: './htz-modal.component.html',
  styleUrl: './htz-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzModalComponent {
  title = input<string>();
  isOpen = model<boolean>(false);

  close() {
    this.isOpen.set(false);
  }
}

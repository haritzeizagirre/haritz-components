import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'htz-drawer',
  standalone: true,
  imports: [],
  templateUrl: './htz-drawer.component.html',
  styleUrl: './htz-drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzDrawerComponent {
  isOpen = model<boolean>(false);
  position = input<'left' | 'right'>('right');
  width = input<string>('300px');

  close() {
    this.isOpen.set(false);
  }
}

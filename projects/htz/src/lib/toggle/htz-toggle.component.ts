import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';

@Component({
  selector: 'htz-toggle',
  standalone: true,
  templateUrl: './htz-toggle.component.html',
  styleUrl: './htz-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzToggleComponent {
  checked = input(false);
  disabled = input(false);
  label = input('');

  checkedChange = output<boolean>();

  toggle(): void {
    if (this.disabled()) return;
    this.checkedChange.emit(!this.checked());
  }
}

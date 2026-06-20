import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'htz-checkbox',
  standalone: true,
  templateUrl: './htz-checkbox.component.html',
  styleUrl: './htz-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzCheckboxComponent {
  checked = input(false);
  indeterminate = input(false);
  disabled = input(false);
  label = input('');

  checkedChange = output<boolean>();

  toggle(): void {
    if (this.disabled()) return;
    this.checkedChange.emit(!this.checked());
  }
}

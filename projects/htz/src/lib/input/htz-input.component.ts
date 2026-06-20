import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';

@Component({
  selector: 'htz-input',
  standalone: true,
  templateUrl: './htz-input.component.html',
  styleUrl: './htz-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzInputComponent {
  label = input('');
  placeholder = input('');
  type = input('text');
  value = input('');
  disabled = input(false);
  error = input('');

  valueChange = output<string>();
  focused = signal(false);

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}

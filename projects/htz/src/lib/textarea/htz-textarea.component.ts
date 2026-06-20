import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';

@Component({
  selector: 'htz-textarea',
  standalone: true,
  templateUrl: './htz-textarea.component.html',
  styleUrl: './htz-textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzTextareaComponent {
  label = input('');
  placeholder = input('');
  value = input('');
  disabled = input(false);
  error = input('');
  rows = input(4);

  valueChange = output<string>();
  focused = signal(false);

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.valueChange.emit(target.value);
  }
}

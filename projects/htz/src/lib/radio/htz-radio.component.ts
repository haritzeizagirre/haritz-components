import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'htz-radio',
  standalone: true,
  templateUrl: './htz-radio.component.html',
  styleUrl: './htz-radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzRadioComponent {
  readonly value = input<any>();
  readonly name = input<string>('');
  readonly disabled = input<boolean>(false);

  readonly selectedValue = model<any>();

  get checked(): boolean {
    return this.value() === this.selectedValue();
  }

  onChange(event: Event): void {
    if (this.disabled()) {
      return;
    }
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.checked) {
      this.selectedValue.set(this.value());
    }
  }
}

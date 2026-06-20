import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'htz-button',
  standalone: true,
  templateUrl: './htz-button.component.html',
  styleUrl: './htz-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"htz-button htz-button--" + variant() + " htz-button--size-" + size()',
    '[class.htz-button--disabled]': 'disabled()',
  },
})
export class HtzButtonComponent {
  variant = input<'primary' | 'secondary' | 'outline' | 'ghost' | 'icon'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled = input(false);
}

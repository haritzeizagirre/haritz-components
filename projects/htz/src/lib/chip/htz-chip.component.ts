import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

export type HtzChipVariant = 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';

@Component({
  selector: 'htz-chip',
  standalone: true,
  templateUrl: './htz-chip.component.html',
  styleUrl: './htz-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"htz-chip " + variant()',
  }
})
export class HtzChipComponent {
  label = input<string>('');
  removable = input<boolean>(false);
  variant = input<HtzChipVariant>('primary');

  removed = output<void>();

  onRemove(event: Event) {
    event.stopPropagation();
    this.removed.emit();
  }
}

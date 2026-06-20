import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type HtzProgressVariant = 'primary' | 'success' | 'warning' | 'error';

@Component({
  selector: 'htz-progress-bar',
  standalone: true,
  templateUrl: './htz-progress-bar.component.html',
  styleUrl: './htz-progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzProgressBarComponent {
  value = input<number>(0);
  variant = input<HtzProgressVariant>('primary');
  showLabel = input<boolean>(false);

  clampedValue = computed(() => {
    const val = this.value();
    return Math.max(0, Math.min(100, val));
  });
}

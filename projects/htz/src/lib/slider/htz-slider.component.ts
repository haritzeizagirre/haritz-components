import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'htz-slider',
  standalone: true,
  templateUrl: './htz-slider.component.html',
  styleUrl: './htz-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzSliderComponent {
  readonly min = input<number>(0);
  readonly max = input<number>(100);
  readonly step = input<number>(1);
  readonly disabled = input<boolean>(false);

  readonly value = model<number>(0);

  readonly fillPercentage = computed(() => {
    const min = this.min();
    const max = this.max();
    const val = this.value();
    
    if (max <= min) return 0;
    
    const percentage = ((val - min) / (max - min)) * 100;
    return Math.max(0, Math.min(100, percentage));
  });

  onInput(event: Event): void {
    if (this.disabled()) return;
    
    const inputElement = event.target as HTMLInputElement;
    this.value.set(Number(inputElement.value));
  }
}

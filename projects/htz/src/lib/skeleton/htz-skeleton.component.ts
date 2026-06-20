import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-skeleton',
  standalone: true,
  templateUrl: './htz-skeleton.component.html',
  styleUrl: './htz-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"htz-skeleton " + shape()',
    '[style.width]': 'width()',
    '[style.height]': 'height()',
  }
})
export class HtzSkeletonComponent {
  shape = input<'rect' | 'circle' | 'text'>('text');
  width = input<string>();
  height = input<string>();
}

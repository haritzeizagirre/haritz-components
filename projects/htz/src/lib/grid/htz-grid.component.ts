import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-grid',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrl: './htz-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--htz-grid-columns]': 'columns()',
    '[style.--htz-grid-gap]': 'gap()',
  },
})
export class HtzGridComponent {
  columns = input(12);
  gap = input('var(--htz-space-gutter)');
}

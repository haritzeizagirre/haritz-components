import { Component, ChangeDetectionStrategy, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'htz-table',
  standalone: true,
  templateUrl: './htz-table.component.html',
  styleUrl: './htz-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HtzTableComponent {
  striped = input(false);
  hoverable = input(true);
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'htz-list',
  standalone: true,
  templateUrl: './htz-list.component.html',
  styleUrl: './htz-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzListComponent {}

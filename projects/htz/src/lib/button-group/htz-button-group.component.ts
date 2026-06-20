import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'htz-button-group',
  standalone: true,
  templateUrl: './htz-button-group.component.html',
  styleUrl: './htz-button-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzButtonGroupComponent {}

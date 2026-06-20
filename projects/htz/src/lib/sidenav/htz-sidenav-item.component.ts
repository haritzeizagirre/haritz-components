import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-sidenav-item',
  standalone: true,
  templateUrl: './htz-sidenav-item.component.html',
  styleUrl: './htz-sidenav-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzSidenavItemComponent {
  icon = input('');
  label = input.required<string>();
  active = input(false);
}

import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-sidenav',
  standalone: true,
  templateUrl: './htz-sidenav.component.html',
  styleUrl: './htz-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzSidenavComponent {
  title = input('');
  version = input('');
  collapsed = input(false);
}

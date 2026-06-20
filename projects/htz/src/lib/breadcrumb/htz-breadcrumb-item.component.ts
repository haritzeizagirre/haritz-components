import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-breadcrumb-item',
  standalone: true,
  template: `
    <span class="htz-breadcrumb-item" [class.htz-breadcrumb-item--active]="active()">
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: './htz-breadcrumb-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzBreadcrumbItemComponent {
  active = input(false);
}

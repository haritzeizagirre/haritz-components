import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-breadcrumb',
  standalone: true,
  template: `
    <nav class="htz-breadcrumb" aria-label="Breadcrumb">
      <ng-content></ng-content>
    </nav>
  `,
  styleUrl: './htz-breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzBreadcrumbComponent {
  separator = input('/');
}

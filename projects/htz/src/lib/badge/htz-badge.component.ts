import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-badge',
  standalone: true,
  template: `
    <span class="htz-badge" [class]="'htz-badge--' + variant() + ' htz-badge--' + size()">
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: './htz-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzBadgeComponent {
  variant = input<'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error'>('primary');
  size = input<'sm' | 'md'>('md');
}

import { Component, ChangeDetectionStrategy, input, signal } from '@angular/core';

@Component({
  selector: 'htz-tab',
  standalone: true,
  template: `
    <div class="htz-tab__content" [class.htz-tab__content--active]="active()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .htz-tab__content { display: none; }
    .htz-tab__content--active { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzTabComponent {
  label = input.required<string>();
  active = signal(false);
}

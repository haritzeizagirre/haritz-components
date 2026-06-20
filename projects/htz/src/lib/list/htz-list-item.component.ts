import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'htz-list-item',
  standalone: true,
  template: `
    <div class="htz-list-item">
      @if (icon()) {
        <div class="htz-list-item-icon">
          <span class="material-symbols-outlined">{{ icon() }}</span>
        </div>
      }
      <div class="htz-list-item-content">
        <div class="htz-list-item-title">{{ title() }}</div>
        @if (description()) {
          <div class="htz-list-item-description">{{ description() }}</div>
        }
      </div>
    </div>
  `,
  styleUrl: './htz-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzListItemComponent {
  title = input.required<string>();
  description = input<string>();
  icon = input<string>();
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'htz-divider',
  standalone: true,
  templateUrl: './htz-divider.component.html',
  styleUrl: './htz-divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vertical]': 'vertical()',
    '[class.horizontal]': '!vertical()'
  }
})
export class HtzDividerComponent {
  vertical = input(false);
}

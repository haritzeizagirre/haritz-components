import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'htz-expansion-panel',
  standalone: true,
  templateUrl: './htz-expansion-panel.component.html',
  styleUrl: './htz-expansion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.expanded]': 'expanded()',
    '[class.disabled]': 'disabled()'
  }
})
export class HtzExpansionPanelComponent {
  title = input<string>('');
  disabled = input(false);
  expanded = model(false);

  toggle() {
    if (this.disabled()) return;
    this.expanded.update(v => !v);
  }
}

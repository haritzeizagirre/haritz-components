import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'htz-step',
  standalone: true,
  template: '<ng-content></ng-content>',
  host: {
    '[class.htz-step-active]': 'active()',
    '[style.display]': 'active() ? "block" : "none"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtzStepComponent {
  label = input<string>('');
  active = signal<boolean>(false);
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'htz-accordion',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--htz-accordion-gap, 8px);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtzAccordionComponent {}

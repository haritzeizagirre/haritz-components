import { ChangeDetectionStrategy, Component, contentChildren, effect, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtzStepComponent } from './htz-step.component';

@Component({
  selector: 'htz-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './htz-stepper.component.html',
  styleUrls: ['./htz-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtzStepperComponent {
  selectedIndex = model<number>(0);
  steps = contentChildren(HtzStepComponent);

  constructor() {
    effect(() => {
      const currentIndex = this.selectedIndex();
      const allSteps = this.steps();
      
      allSteps.forEach((step, index) => {
        step.active.set(index === currentIndex);
      });
    });
  }

  selectStep(index: number) {
    this.selectedIndex.set(index);
  }
}

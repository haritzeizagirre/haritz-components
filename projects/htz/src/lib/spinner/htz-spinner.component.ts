import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'htz-spinner',
  standalone: true,
  templateUrl: './htz-spinner.component.html',
  styleUrl: './htz-spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzSpinnerComponent {
  size = input<'sm' | 'md' | 'lg'>('md');
}

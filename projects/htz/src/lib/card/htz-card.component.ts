import { Component, ChangeDetectionStrategy, Directive, input, contentChild } from '@angular/core';

@Directive({ selector: '[htz-card-media]', standalone: true })
export class HtzCardMediaDirective {}

@Directive({
  selector: '[htz-card-title]',
  standalone: true,
  host: { 'class': 'htz-card-title' },
})
export class HtzCardTitleDirective {}

@Directive({
  selector: '[htz-card-body]',
  standalone: true,
  host: { 'class': 'htz-card-body' },
})
export class HtzCardBodyDirective {}

@Directive({
  selector: '[htz-card-action]',
  standalone: true,
  host: { 'class': 'htz-card-action' },
})
export class HtzCardActionDirective {}

@Component({
  selector: 'htz-card',
  standalone: true,
  imports: [HtzCardMediaDirective, HtzCardTitleDirective, HtzCardBodyDirective, HtzCardActionDirective],
  templateUrl: './htz-card.component.html',
  styleUrl: './htz-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'htz-card',
    '[class.htz-card--hoverable]': 'hoverable()',
    '[class.htz-card--elevated]': 'elevated()',
  },
})
export class HtzCardComponent {
  elevated = input(false);
  hoverable = input(true);
  hasMedia = contentChild(HtzCardMediaDirective);
}

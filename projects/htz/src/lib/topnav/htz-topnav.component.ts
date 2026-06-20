import { Component, ChangeDetectionStrategy, Directive, input } from '@angular/core';

@Directive({
  selector: '[htz-topnav-link]',
  standalone: true,
  host: {
    'class': 'htz-topnav-link',
    '[class.htz-topnav-link--active]': 'active()',
  },
})
export class HtzTopnavLinkDirective {
  active = input(false);
}

@Component({
  selector: 'htz-topnav',
  standalone: true,
  imports: [HtzTopnavLinkDirective],
  templateUrl: './htz-topnav.component.html',
  styleUrl: './htz-topnav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzTopnavComponent {
  title = input('');
}

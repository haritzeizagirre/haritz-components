import { Component, ChangeDetectionStrategy, contentChildren, signal, afterNextRender, effect } from '@angular/core';
import { HtzTabComponent } from './htz-tab.component';

@Component({
  selector: 'htz-tabs',
  standalone: true,
  imports: [HtzTabComponent],
  templateUrl: './htz-tabs.component.html',
  styleUrl: './htz-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzTabsComponent {
  tabs = contentChildren(HtzTabComponent);
  activeIndex = signal(0);

  constructor() {
    effect(() => {
      const tabList = this.tabs();
      const idx = this.activeIndex();
      tabList.forEach((tab, i) => tab.active.set(i === idx));
    });
  }

  selectTab(index: number): void {
    this.activeIndex.set(index);
  }
}

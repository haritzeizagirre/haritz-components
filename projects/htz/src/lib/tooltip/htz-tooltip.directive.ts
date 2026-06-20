import { Directive, ElementRef, input, OnDestroy, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[htzTooltip]',
  standalone: true,
})
export class HtzTooltipDirective implements OnDestroy {
  htzTooltip = input.required<string>();
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('top');

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private tooltipElement: HTMLElement | null = null;
  private removeListeners: (() => void)[] = [];

  constructor() {
    const mouseEnter = this.renderer.listen(this.el.nativeElement, 'mouseenter', () => this.show());
    const mouseLeave = this.renderer.listen(this.el.nativeElement, 'mouseleave', () => this.hide());
    this.removeListeners.push(mouseEnter, mouseLeave);
  }

  private show(): void {
    if (this.tooltipElement) return;

    this.tooltipElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.htzTooltip());
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);

    const styles: Record<string, string> = {
      position: 'fixed',
      'z-index': '10000',
      'background-color': '#404040',
      color: '#f3f4f6',
      'font-family': 'Inter, sans-serif',
      'font-size': '12px',
      'font-weight': '500',
      'line-height': '1.2',
      padding: '6px 10px',
      'border-radius': '4px',
      'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.3)',
      'pointer-events': 'none',
      'white-space': 'nowrap',
      opacity: '0',
      transition: 'opacity 150ms ease',
    };

    Object.entries(styles).forEach(([key, value]) => {
      this.renderer.setStyle(this.tooltipElement, key, value);
    });

    const hostRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement!.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (this.tooltipPosition()) {
      case 'top':
        top = hostRect.top - tooltipRect.height - 8;
        left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = hostRect.bottom + 8;
        left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.right + 8;
        break;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);

    requestAnimationFrame(() => {
      if (this.tooltipElement) {
        this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
      }
    });
  }

  private hide(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }

  ngOnDestroy(): void {
    this.hide();
    this.removeListeners.forEach(fn => fn());
  }
}

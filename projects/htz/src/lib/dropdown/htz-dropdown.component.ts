import { Component, ChangeDetectionStrategy, signal, HostListener, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'htz-dropdown',
  standalone: true,
  templateUrl: './htz-dropdown.component.html',
  styleUrl: './htz-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzDropdownComponent {
  isOpen = signal(false);
  private elementRef = inject(ElementRef);

  toggle(): void {
    this.isOpen.update(v => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
}

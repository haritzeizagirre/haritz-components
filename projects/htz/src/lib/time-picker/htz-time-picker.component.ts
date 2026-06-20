import { Component, ChangeDetectionStrategy, model, computed, signal, HostListener, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'htz-time-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './htz-time-picker.component.html',
  styleUrl: './htz-time-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtzTimePickerComponent {
  time = model<string | null>(null);
  
  isOpen = signal(false);

  hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  selectedHour = computed(() => {
    const t = this.time();
    return t ? t.split(':')[0] : null;
  });

  selectedMinute = computed(() => {
    const t = this.time();
    return t ? t.split(':')[1] : null;
  });

  private elementRef = inject(ElementRef);

  toggleDropdown() {
    this.isOpen.update(v => !v);
  }

  openDropdown() {
    this.isOpen.set(true);
  }

  closeDropdown() {
    this.isOpen.set(false);
  }

  selectHour(hour: string) {
    const min = this.selectedMinute() || '00';
    this.time.set(`${hour}:${min}`);
  }

  selectMinute(minute: string) {
    const hr = this.selectedHour() || '00';
    this.time.set(`${hr}:${minute}`);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}

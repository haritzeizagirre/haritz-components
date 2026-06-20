import { Component, ChangeDetectionStrategy, input, output, signal, computed } from '@angular/core';

@Component({
  selector: 'htz-calendar',
  standalone: true,
  templateUrl: './htz-calendar.component.html',
  styleUrl: './htz-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzCalendarComponent {
  value = input<Date | null>(null);
  valueChange = output<Date>();

  currentMonth = signal(new Date().getMonth());
  currentYear = signal(new Date().getFullYear());

  monthName = computed(() => {
    const date = new Date(this.currentYear(), this.currentMonth(), 1);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  });

  days = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth();
    
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const grid = [];
    
    // Empty cells for the first row
    for (let i = 0; i < firstDayIndex; i++) {
      grid.push(null);
    }
    
    // Days
    for (let i = 1; i <= daysInMonth; i++) {
      grid.push(new Date(year, month, i));
    }
    
    return grid;
  });

  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  prevMonth(): void {
    if (this.currentMonth() === 0) {
      this.currentMonth.set(11);
      this.currentYear.update(y => y - 1);
    } else {
      this.currentMonth.update(m => m - 1);
    }
  }

  nextMonth(): void {
    if (this.currentMonth() === 11) {
      this.currentMonth.set(0);
      this.currentYear.update(y => y + 1);
    } else {
      this.currentMonth.update(m => m + 1);
    }
  }

  selectDate(date: Date | null): void {
    if (!date) return;
    this.valueChange.emit(date);
  }

  isSelected(date: Date | null): boolean {
    if (!date || !this.value()) return false;
    const v = this.value()!;
    return date.getDate() === v.getDate() &&
           date.getMonth() === v.getMonth() &&
           date.getFullYear() === v.getFullYear();
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
}

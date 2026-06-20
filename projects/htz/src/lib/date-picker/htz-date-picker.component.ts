import { Component, ChangeDetectionStrategy, model, signal, computed, effect, HostListener, ElementRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'htz-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './htz-date-picker.component.html',
  styleUrls: ['./htz-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class HtzDatePickerComponent {
  date = model<Date | null>(null);

  isOpen = signal(false);
  currentMonth = signal(new Date());

  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  formattedDate = computed(() => {
    const d = this.date();
    return d ? this.datePipe.transform(d, 'mediumDate') : '';
  });

  calendarGrid = computed(() => {
    return this.generateCalendar(this.currentMonth(), this.date());
  });

  constructor(private datePipe: DatePipe, private elementRef: ElementRef) {
    effect(() => {
      const d = this.date();
      if (d) {
        this.currentMonth.set(new Date(d.getFullYear(), d.getMonth(), 1));
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  togglePopup() {
    this.isOpen.update(v => !v);
  }

  previousMonth(event: Event) {
    event.stopPropagation();
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  nextMonth(event: Event) {
    event.stopPropagation();
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  selectDate(day: CalendarDay, event: Event) {
    event.stopPropagation();
    this.date.set(day.date);
    this.isOpen.set(false);
  }

  private generateCalendar(monthDate: Date, selectedDate: Date | null): CalendarDay[] {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    let startingDayOfWeek = firstDayOfMonth.getDay() - 1; // 0 for Mon, 6 for Sun
    if (startingDayOfWeek === -1) startingDayOfWeek = 6;
    
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selDate = selectedDate ? new Date(selectedDate) : null;
    if (selDate) selDate.setHours(0, 0, 0, 0);

    // Previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({
        date: d,
        isCurrentMonth: false,
        isToday: d.getTime() === today.getTime(),
        isSelected: selDate ? d.getTime() === selDate.getTime() : false
      });
    }

    // Current month's days
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const d = new Date(year, month, i);
      days.push({
        date: d,
        isCurrentMonth: true,
        isToday: d.getTime() === today.getTime(),
        isSelected: selDate ? d.getTime() === selDate.getTime() : false
      });
    }

    // Next month's days to complete the 6 rows of 7 days (42 grid items)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const d = new Date(year, month + 1, i);
      days.push({
        date: d,
        isCurrentMonth: false,
        isToday: d.getTime() === today.getTime(),
        isSelected: selDate ? d.getTime() === selDate.getTime() : false
      });
    }

    return days;
  }
}

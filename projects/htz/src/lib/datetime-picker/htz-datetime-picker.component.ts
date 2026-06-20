import { Component, ChangeDetectionStrategy, model, computed, signal, HostListener, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'htz-datetime-picker',
  standalone: true,
  imports: [],
  templateUrl: './htz-datetime-picker.component.html',
  styleUrls: ['./htz-datetime-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtzDatetimePickerComponent {
  datetime = model<Date | null>(null);

  isOpen = signal(false);

  currentMonth = signal(new Date());

  hours = Array.from({length: 24}, (_, i) => i);
  minutes = Array.from({length: 60}, (_, i) => i);

  elementRef = inject(ElementRef);

  selectedHour = computed(() => this.datetime()?.getHours() ?? 0);
  selectedMinute = computed(() => this.datetime()?.getMinutes() ?? 0);

  formattedDateTime = computed(() => {
    const dt = this.datetime();
    if (!dt) return '';
    return this.formatDate(dt);
  });

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  calendarDays = computed(() => {
    const month = this.currentMonth();
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, monthIndex, 0).getDate();
    
    const days = [];
    
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: daysInPrevMonth - i, isCurrentMonth: false, date: new Date(year, monthIndex - 1, daysInPrevMonth - i) });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true, date: new Date(year, monthIndex, i) });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false, date: new Date(year, monthIndex + 1, i) });
    }
    
    return days;
  });

  formatDate(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  toggleOpen() {
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      const dt = this.datetime();
      this.currentMonth.set(dt ? new Date(dt) : new Date());
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  prevMonth() {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  nextMonth() {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  selectDate(dateObj: {date: Date, isCurrentMonth: boolean}) {
    const current = this.datetime();
    const newDate = new Date(dateObj.date);
    if (current) {
      newDate.setHours(current.getHours());
      newDate.setMinutes(current.getMinutes());
    } else {
      newDate.setHours(0);
      newDate.setMinutes(0);
    }
    this.datetime.set(newDate);
    if (!dateObj.isCurrentMonth) {
      this.currentMonth.set(newDate);
    }
  }

  selectHour(hour: number) {
    let dt = this.datetime();
    if (!dt) {
       dt = new Date();
       dt.setMinutes(0);
       dt.setSeconds(0);
       dt.setMilliseconds(0);
    }
    const newDt = new Date(dt);
    newDt.setHours(hour);
    this.datetime.set(newDt);
  }

  selectMinute(minute: number) {
    let dt = this.datetime();
    if (!dt) {
       dt = new Date();
       dt.setHours(0);
       dt.setSeconds(0);
       dt.setMilliseconds(0);
    }
    const newDt = new Date(dt);
    newDt.setMinutes(minute);
    this.datetime.set(newDt);
  }

  isSelectedDate(date: Date): boolean {
    const dt = this.datetime();
    if (!dt) return false;
    return dt.getDate() === date.getDate() && 
           dt.getMonth() === date.getMonth() && 
           dt.getFullYear() === date.getFullYear();
  }

  get currentMonthName(): string {
    return this.currentMonth().toLocaleString('default', { month: 'long', year: 'numeric' });
  }
}

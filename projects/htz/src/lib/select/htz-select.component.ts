import { Component, ChangeDetectionStrategy, input, output, signal, ElementRef, HostListener, computed } from '@angular/core';

export interface HtzSelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'htz-select',
  standalone: true,
  templateUrl: './htz-select.component.html',
  styleUrl: './htz-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzSelectComponent {
  label = input('');
  placeholder = input('Select...');
  value = input('');
  disabled = input(false);
  error = input('');
  options = input<HtzSelectOption[]>([]);

  valueChange = output<string>();
  
  focused = signal(false);
  isOpen = signal(false);

  selectedLabel = computed(() => {
    const opt = this.options().find(o => o.value === this.value());
    return opt ? opt.label : '';
  });

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
      this.focused.set(false);
    }
  }

  toggleDropdown() {
    if (this.disabled()) return;
    this.isOpen.update(v => !v);
    this.focused.set(true);
  }

  selectOption(option: HtzSelectOption, event: Event) {
    event.stopPropagation();
    if (this.disabled()) return;
    this.valueChange.emit(option.value);
    this.isOpen.set(false);
  }
}

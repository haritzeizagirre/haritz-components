import { Component, ChangeDetectionStrategy, input, output, signal, computed } from '@angular/core';

@Component({
  selector: 'htz-alert',
  standalone: true,
  templateUrl: './htz-alert.component.html',
  styleUrl: './htz-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzAlertComponent {
  severity = input<'info' | 'success' | 'warning' | 'error'>('info');
  dismissible = input(false);
  title = input('');

  dismissed = output<void>();
  visible = signal(true);

  iconName = computed(() => {
    const icons: Record<string, string> = {
      info: 'info',
      success: 'check_circle',
      warning: 'warning',
      error: 'error',
    };
    return icons[this.severity()] || 'info';
  });

  dismiss(): void {
    this.visible.set(false);
    this.dismissed.emit();
  }
}

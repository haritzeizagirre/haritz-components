import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HtzToastService } from './htz-toast.service';

@Component({
  selector: 'htz-toast-container',
  standalone: true,
  templateUrl: './htz-toast-container.component.html',
  styleUrl: './htz-toast-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzToastContainerComponent {
  toastService = inject(HtzToastService);

  getIcon(severity: string): string {
    const icons: Record<string, string> = {
      info: 'info',
      success: 'check_circle',
      warning: 'warning',
      error: 'error',
    };
    return icons[severity] || 'info';
  }
}

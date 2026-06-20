import { Injectable, signal } from '@angular/core';
import { HtzToastConfig, HtzToastRef } from './toast.model';

@Injectable({ providedIn: 'root' })
export class HtzToastService {
  toasts = signal<HtzToastRef[]>([]);

  private counter = 0;

  show(config: HtzToastConfig): string {
    const id = `toast-${++this.counter}`;
    const duration = config.duration ?? 4000;

    this.toasts.update(list => [...list, { id, config }]);

    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }

    return id;
  }

  dismiss(id: string): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }

  success(message: string, title?: string): string {
    return this.show({ message, severity: 'success', title });
  }

  error(message: string, title?: string): string {
    return this.show({ message, severity: 'error', title });
  }

  info(message: string, title?: string): string {
    return this.show({ message, severity: 'info', title });
  }

  warning(message: string, title?: string): string {
    return this.show({ message, severity: 'warning', title });
  }
}

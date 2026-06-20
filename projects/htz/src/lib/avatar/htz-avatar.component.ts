import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'htz-avatar',
  standalone: true,
  templateUrl: './htz-avatar.component.html',
  styleUrl: './htz-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzAvatarComponent {
  src = input('');
  alt = input('');
  initials = input('');
  size = input<'sm' | 'md' | 'lg'>('md');

  showImage = computed(() => !!this.src());
  displayInitials = computed(() => this.initials().substring(0, 2).toUpperCase());
}

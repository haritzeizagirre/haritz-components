import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'htz-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './htz-pagination.component.html',
  styleUrls: ['./htz-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtzPaginationComponent {
  totalItems = input<number>(0);
  pageSize = input<number>(10);
  currentPage = model<number>(1);

  totalPages = computed(() => {
    return Math.max(1, Math.ceil(this.totalItems() / this.pageSize()));
  });

  pages = computed(() => {
    const pagesArray = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  });

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  previous() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  next() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }
}

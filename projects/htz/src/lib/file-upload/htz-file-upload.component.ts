import { ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, output, viewChild } from '@angular/core';

@Component({
  selector: 'htz-file-upload',
  standalone: true,
  templateUrl: './htz-file-upload.component.html',
  styleUrl: './htz-file-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtzFileUploadComponent {
  fileSelected = output<File>();
  isDragOver = signal(false);

  fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileSelected.emit(files[0]);
    }
  }

  onClick() {
    this.fileInput()?.nativeElement.click();
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.fileSelected.emit(files[0]);
      // Reset input value so the same file can be selected again
      target.value = '';
    }
  }
}

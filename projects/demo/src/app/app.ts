import { Component, signal, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  HtzButtonComponent,
  HtzCardComponent,
  HtzCardMediaDirective,
  HtzCardTitleDirective,
  HtzCardBodyDirective,
  HtzCardActionDirective,
  HtzTabsComponent,
  HtzTabComponent,
  HtzGridComponent,
  HtzSidenavComponent,
  HtzSidenavItemComponent,
  HtzTopnavComponent,
  HtzTopnavLinkDirective,
  HtzInputComponent,
  HtzTextareaComponent,
  HtzSelectComponent,
  HtzSelectOption,
  HtzToggleComponent,
  HtzCheckboxComponent,
  HtzAlertComponent,
  HtzBadgeComponent,
  HtzSpinnerComponent,
  HtzToastService,
  HtzToastContainerComponent,
  HtzAvatarComponent,
  HtzTooltipDirective,
  HtzTableComponent,
  HtzBreadcrumbComponent,
  HtzBreadcrumbItemComponent,
  HtzDropdownComponent,
  HtzCalendarComponent,
  HtzRadioComponent,
  HtzSliderComponent,
  HtzFileUploadComponent,
  HtzButtonGroupComponent,
  HtzDividerComponent,
  HtzAccordionComponent,
  HtzExpansionPanelComponent,
  HtzPaginationComponent,
  HtzStepperComponent,
  HtzStepComponent,
  HtzListComponent,
  HtzListItemComponent,
  HtzTreeComponent,
  HtzTreeNode,
  HtzProgressBarComponent,
  HtzModalComponent,
  HtzDrawerComponent,
  HtzSkeletonComponent,
  HtzChipComponent,
  HtzDatePickerComponent,
  HtzTimePickerComponent,
  HtzDatetimePickerComponent
} from '@haritzeiza/htz';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HtzButtonComponent,
    HtzCardComponent,
    HtzCardMediaDirective,
    HtzCardTitleDirective,
    HtzCardBodyDirective,
    HtzCardActionDirective,
    HtzTabsComponent,
    HtzTabComponent,
    HtzGridComponent,
    HtzSidenavComponent,
    HtzSidenavItemComponent,
    HtzTopnavComponent,
    HtzTopnavLinkDirective,
    HtzInputComponent,
    HtzTextareaComponent,
    HtzSelectComponent,
    HtzToggleComponent,
    HtzCheckboxComponent,
    HtzAlertComponent,
    HtzBadgeComponent,
    HtzSpinnerComponent,
    HtzToastContainerComponent,
    HtzAvatarComponent,
    HtzTooltipDirective,
    HtzTableComponent,
    HtzBreadcrumbComponent,
    HtzBreadcrumbItemComponent,
    HtzDropdownComponent,
    HtzCalendarComponent,
    HtzRadioComponent,
    HtzSliderComponent,
    HtzFileUploadComponent,
    HtzButtonGroupComponent,
    HtzDividerComponent,
    HtzAccordionComponent,
    HtzExpansionPanelComponent,
    HtzPaginationComponent,
    HtzStepperComponent,
    HtzStepComponent,
    HtzListComponent,
    HtzListItemComponent,
    HtzTreeComponent,
    HtzProgressBarComponent,
    HtzModalComponent,
    HtzDrawerComponent,
    HtzSkeletonComponent,
    HtzChipComponent,
    HtzDatePickerComponent,
    HtzTimePickerComponent,
    HtzDatetimePickerComponent,
    DatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private toastService = inject(HtzToastService);

  // States
  toggleState = signal(false);
  checkboxState1 = signal(true);
  checkboxState2 = signal(false);
  
  selectValue = signal('');
  selectOptions: HtzSelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  inputValue = signal('');
  calendarDate = signal<Date | null>(new Date());
  
  // FASE 1 States
  radioValue = signal('opt2');
  sliderValue = signal(50);
  selectedFileName = signal<string | null>(null);

  // FASE 2 States
  currentPage = signal(1);
  currentStep = signal(0);

  // FASE 3 States
  treeData: HtzTreeNode[] = [
    {
      label: 'Documentos',
      expanded: true,
      children: [
        { label: 'Facturas' },
        { label: 'Contratos' }
      ]
    },
    {
      label: 'Imágenes',
      children: [
        { label: 'Vacaciones.jpg' },
        { label: 'Logo.png' }
      ]
    }
  ];

  // FASE 4 States
  isModalOpen = signal(false);
  isDrawerOpen = signal(false);

  // FASE 5 States
  selectedDate = signal<Date | null>(new Date());
  selectedTime = signal<string>('14:30');
  selectedDatetime = signal<Date | null>(new Date());

  onFileSelected(file: File) {
    this.selectedFileName.set(file.name);
    this.toastService.success(`File ${file.name} uploaded!`, 'Success');
  }

  showToast() {
    this.toastService.success('Action completed successfully!', 'Success');
  }

  showErrorToast() {
    this.toastService.error('An error occurred during the process.', 'Error');
  }
}

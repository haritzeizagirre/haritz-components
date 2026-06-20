/*
 * Htz Component Library
 * Public API Surface
 */

// === Styles ===
// Consumers should import the theme in their styles.scss:
// @import 'htz/styles/htz-theme';

// === Components ===

// Button
export { HtzButtonComponent } from './lib/button';

// Card
export {
  HtzCardComponent,
  HtzCardMediaDirective,
  HtzCardTitleDirective,
  HtzCardBodyDirective,
  HtzCardActionDirective,
} from './lib/card';

// Tabs
export { HtzTabsComponent, HtzTabComponent } from './lib/tabs';

// Grid
export { HtzGridComponent } from './lib/grid';

// SideNav
export { HtzSidenavComponent, HtzSidenavItemComponent } from './lib/sidenav';

// TopNav
export { HtzTopnavComponent, HtzTopnavLinkDirective } from './lib/topnav';

// Input
export { HtzInputComponent } from './lib/input';

// Textarea
export { HtzTextareaComponent } from './lib/textarea';

// Select
export { HtzSelectComponent } from './lib/select';
export type { HtzSelectOption } from './lib/select';

// Toggle
export { HtzToggleComponent } from './lib/toggle';

// Checkbox
export { HtzCheckboxComponent } from './lib/checkbox';

// Alert
export { HtzAlertComponent } from './lib/alert';

// Badge
export { HtzBadgeComponent } from './lib/badge';

// Spinner
export { HtzSpinnerComponent } from './lib/spinner';

// Toast
export { HtzToastService, HtzToastContainerComponent } from './lib/toast';
export type { HtzToastConfig, HtzToastRef } from './lib/toast';

// Avatar
export { HtzAvatarComponent } from './lib/avatar';

// Tooltip
export { HtzTooltipDirective } from './lib/tooltip';

// Table
export { HtzTableComponent } from './lib/table';

// Breadcrumb
export { HtzBreadcrumbComponent, HtzBreadcrumbItemComponent } from './lib/breadcrumb';

// Dropdown
export { HtzDropdownComponent } from './lib/dropdown';

// Calendar
export { HtzCalendarComponent } from './lib/calendar';

// --- FASE 1: Formularios y Acciones ---

// Radio
export { HtzRadioComponent } from './lib/radio';

// Slider
export { HtzSliderComponent } from './lib/slider';

// File Upload
export { HtzFileUploadComponent } from './lib/file-upload';

// Button Group
export { HtzButtonGroupComponent } from './lib/button-group';

// --- FASE 2: Layout y Navegación ---

// Divider
export { HtzDividerComponent } from './lib/divider';

// Accordion
export { HtzAccordionComponent, HtzExpansionPanelComponent } from './lib/accordion';

// Pagination
export { HtzPaginationComponent } from './lib/pagination';

// Stepper
export { HtzStepperComponent, HtzStepComponent } from './lib/stepper';

// --- FASE 3: Data & Feedback ---

// List
export { HtzListComponent, HtzListItemComponent } from './lib/list';

// Tree
export { HtzTreeComponent } from './lib/tree';
export type { HtzTreeNode } from './lib/tree';

// Progress Bar
export { HtzProgressBarComponent } from './lib/progress-bar';

// --- FASE 4: Overlays & Feedback ---

// Modal
export { HtzModalComponent } from './lib/modal';

// Drawer
export { HtzDrawerComponent } from './lib/drawer';

// Skeleton
export { HtzSkeletonComponent } from './lib/skeleton';

// Chip
export { HtzChipComponent } from './lib/chip';

// --- FASE 5: Date & Time Pickers ---

// Date Picker
export { HtzDatePickerComponent } from './lib/date-picker';

// Time Picker
export { HtzTimePickerComponent } from './lib/time-picker';

// DateTime Picker
export { HtzDatetimePickerComponent } from './lib/datetime-picker';

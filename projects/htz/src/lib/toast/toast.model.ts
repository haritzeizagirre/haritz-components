export interface HtzToastConfig {
  message: string;
  severity?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  title?: string;
}

export interface HtzToastRef {
  id: string;
  config: HtzToastConfig;
}

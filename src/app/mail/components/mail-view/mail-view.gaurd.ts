import { CanDeactivateFn } from '@angular/router';

import { MailViewComponent } from './mail-view.component';

export const mailViewGaurd: CanDeactivateFn<MailViewComponent> = (
  component: MailViewComponent
) => {
  if (component.hasUnsavedChanges) {
    return window.confirm('Are you sure you want to leave?');
  }
  return true;
};

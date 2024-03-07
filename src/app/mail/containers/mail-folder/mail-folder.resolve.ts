import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

export const mailFolderResolver: ResolveFn<Mail[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(MailService).getFolder(route.params['name']);
};

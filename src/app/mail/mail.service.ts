import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string) {
    return this.http
      .get<Mail[]>(`/api/messages?folder=${folder}`)
      .pipe(catchError((err) => throwError(() => new Error(err.message))));
  }

  getMessage(id: string) {
    return this.http.get<Mail[]>(`/api/messages?id=${id}`).pipe(
      map((response) => response[0]),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }
}
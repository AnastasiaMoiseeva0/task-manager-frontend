import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { Key, SessionStorageService } from './../services/session.service';
import { LoginResponse } from './types/login';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    private sessionStorageService: SessionStorageService,
    private logger: LoggerService,
  ) {}

  authorize(email: string, password: string): Observable<void> {
    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/signin`,
        { email, password },
      )
      .pipe(
        map((data) => {
          if (data?.token) {
            this.sessionStorageService.set(Key.Token, data.token);
            return;
          } else {
            this.logger.error('Auth error');
            throw new Error('Не удалось аторизовать пользователя');
          }
        })
      );
  }
}

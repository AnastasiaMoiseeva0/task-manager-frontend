import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { Key, SessionStorageService } from '../services/session.service';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    private sessionStorageService: SessionStorageService
  ) {}

  authorize(email: string, password: string): Observable<void> {
    return this.http
      .post<any>(
        `${this.apiUrl}/signin`,
        { email, password },
      )
      .pipe(
        map((data) => {
          if (data?.token) {
            this.sessionStorageService.set(Key.Token, data.token);
            return;
          } else {
            throw new Error('Не удалось аторизовать пользователя');
          }
        })
      );
  }
}

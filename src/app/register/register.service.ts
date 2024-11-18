import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { Register } from './types/register';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class RegisterService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    private logger: LoggerService
  ) {}

  register(email: string, password: string): Observable<Register> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });

    return this.http
      .post<Register>(
        `${this.apiUrl}/register`,
        { email, password },
        { headers }
      )
      .pipe(
        catchError(() => {
          this.logger.error('Register error');
          throw new Error('При регистрации произошла ошибка');
        })
      );
  }
}

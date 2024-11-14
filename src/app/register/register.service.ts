import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../tokens/api-url.token';
import { Profile } from 'src/dto';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  register(email: string, password: string): Observable<Profile> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    return this.http.post<Profile>(`${this.apiUrl}/register`, { email, password }, { headers });
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, iif, map, of, switchMap, tap } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../tokens/api-url.token';
import { CacheService } from 'src/app/services/cache.service';
import { Discipline, DisciplineDetails } from 'src/dto';
import { LoggerService } from 'src/app/services/logger.service';

@Injectable()
export class DisciplineService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly cacheService: CacheService,
    @Inject(API_URL) private apiUrl: string,
    private logger: LoggerService
  ) {}

  public getDisciplines$(): Observable<Discipline[]> {
    const CACHE_KEY = `DISCIPLINES`;

    return this.cacheService.getCache$<Discipline[]>(`${CACHE_KEY}`).pipe(
      switchMap((cache) =>
        iif(
          () => !!cache,
          of(cache!),
          this.httpClient.get<Discipline[]>(`${this.apiUrl}/disciplines`).pipe(
            tap((data) => {
              this.cacheService.updateCache(CACHE_KEY, data);
            }),
            catchError(() => {
              this.logger.error('Error fetching disciplines');
              return of([]);
            })
          )
        )
      )
    );
  }

  public getDiscipline$(id: string): Observable<DisciplineDetails | null> {
    const CACHE_KEY = `DISCIPLINE_${id}`;

    return this.cacheService.getCache$<DisciplineDetails>(CACHE_KEY).pipe(
      switchMap((cache) =>
        iif(
          () => !!cache,
          of(cache!),
          this._getDiscipline$(id).pipe(
            tap((data) => {
              this.cacheService.updateCache(CACHE_KEY, data);
            }),
            catchError(() => {
              this.logger.error('Error fetching discipline');
              return of(null);
            })
          )
        )
      )
    );
  }

  create$(
    name: string,
    checkKnowledge: string,
    organization: string,
    tags: string[],
    description: string,
    files: File[]
  ): Observable<DisciplineDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Disposition': 'multipart/form-data',
      }),
    };

    let formData: FormData = new FormData();

    formData.append('name', name);
    formData.append('checkKnowledge', checkKnowledge);
    formData.append('organization', organization);
    tags.forEach((tag) => {
      formData.append('tags[]', tag);
    });
    formData.append('description', description);
    files.forEach((file) => {
      formData.append('files[]', file, file.name);
    });

    return this.httpClient.post<DisciplineDetails>(
      `${this.apiUrl}/disciplines`,
      formData,
      httpOptions
    );
  }

  private _getDiscipline$(id: string): Observable<Discipline> {
    return this.httpClient
      .get<Discipline[]>(`${this.apiUrl}/disciplines?id=${id}`)
      .pipe(
        map((disciplines) => {
          return disciplines?.[0] || null;
        })
      );
  }
}

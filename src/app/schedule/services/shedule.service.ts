import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, switchMap, iif, of, tap, catchError } from 'rxjs';
import { CacheService } from 'src/app/services/cache.service';
import { API_URL } from 'src/app/tokens/api-url.token';
import { Discipline, ScheduleEvent } from 'src/dto';

@Injectable()
export class SheduleService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly cacheService: CacheService,
    @Inject(API_URL) private apiUrl: string
  ) {}

  public getSchedulesEvents$(
    disciplineId: Discipline['id']
  ): Observable<ScheduleEvent[] | null> {
    const CACHE_KEY = `SCHEDULE_EVENTS_${disciplineId}`;

    return this.cacheService.getCache$<ScheduleEvent[]>(`${CACHE_KEY}`).pipe(
      switchMap((cache) =>
        iif(
          () => !!cache,
          of(cache!),
          this.httpClient
            .get<ScheduleEvent[]>(
              `${this.apiUrl}/events?disciplineId=${disciplineId}`
            )
            .pipe(
              tap((data) => {
                this.cacheService.updateCache(CACHE_KEY, data);
              }),
              catchError((error) => {
                console.error('Error fetching schedule events:', error);
                return of(null);
              })
            )
        )
      )
    );
  }
}

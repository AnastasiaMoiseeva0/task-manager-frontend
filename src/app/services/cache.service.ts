import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

const CACHE_TIME_MS = 1 * 60 * 1000;
@Injectable()
export class CacheService {
  cache$ = new BehaviorSubject<Record<string, {
    data: any;
    time: number;
  }>>({});

  getCache$<T>(key: string | number): Observable<T | null> {
    return this.cache$.pipe(
      map((cache) => cache?.[key]),
      map((cache) => {
        const cacheTime = cache?.time;
        const now = (new Date()).getTime();
        const timeCheck = cache && ((now - cacheTime)) < CACHE_TIME_MS;

        if (timeCheck) {
          return cache.data;
        }

        return null;
      })
    );
  }

  updateCache<T>(key: string | number, data: T) {
    let newCache = this.cache$.value;
  
    newCache[key] = {
      data,
      time: (new Date()).getTime(),
    };

    this.cache$.next(newCache);
  }
}
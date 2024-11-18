import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(log: string) {
    console.log(log)
  };
  error(log: string) {
    console.error(log)
  };
  warn(log: string) {
    console.warn(log)
  };
}

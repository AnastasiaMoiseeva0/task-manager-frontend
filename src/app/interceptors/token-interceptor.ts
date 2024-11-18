import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Key, SessionStorageService } from "../services/session.service";
import { Observable, catchError, of, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public sessionStorageService: SessionStorageService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sessionStorageService.get<string>(Key.Token);

    if (token) {
      request = this.addToken(request, token);
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        this.handle401Error();
      }

      return throwError(error);
    }));
  }

  private addToken(request: HttpRequest<unknown>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401Error() {
    this.router.navigate(['/login']);
  }
}

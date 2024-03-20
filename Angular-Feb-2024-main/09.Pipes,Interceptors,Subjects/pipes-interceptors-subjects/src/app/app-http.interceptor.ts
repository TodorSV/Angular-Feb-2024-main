import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { API_URL } from './constants';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith('/api')) {

      request = request.clone({
        url: request.url.replace('/api', API_URL),
      })
    }
    return next.handle(request).pipe(
      tap((req) => {
        if (req instanceof HttpRequest) {
          console.log(req);
        }
      }),

      // How to catch errors  
      // КОГАТО ОТ ТУК ПРЕСРЕЩАМЕ ГРЕШКИ, НЕ МОЖЕМ ДА ГИ ПРИХВАНЕМ ОТ ДРУГАДЕ
      catchError((err) => {
        if (err.status === 0) {
          console.error('Error from interceptor', err);
          // Obervable from type <never>
        return EMPTY;
        }

        // Връщаме грешката, катро масив
        return [err];
      })
    );
  }
}

export const appHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  // multi: true Викаме всички интерсептори
  multi: true,
  useClass: AppHttpInterceptor,
}

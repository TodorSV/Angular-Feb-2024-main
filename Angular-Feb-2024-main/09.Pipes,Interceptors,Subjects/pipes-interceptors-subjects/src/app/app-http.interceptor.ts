import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return next.handle(request);
  }
}

export const appHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  // multi: true Викаме всички интерсептори
  multi: true,
  useClass: AppHttpInterceptor,
}

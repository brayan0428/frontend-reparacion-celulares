import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorHeadersService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token') || null;
    if (token) {
      let headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      const request = req.clone({
        headers,
      });
      return next.handle(request);
    }

    return next.handle(req);
  }
}

import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class UniversalInterceptorService implements HttpInterceptor {

  constructor(
    @Optional() @Inject('serverUrl') protected serverUrl: string
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`intercepting the url ${req.url}`);
    const serverReq = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`
    });

    return next.handle(serverReq);
  }
}

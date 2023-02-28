import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError, of } from 'rxjs'
import { finalize } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable()
export class Interceptor1Interceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private api: ApiService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'trdytf45gfyh76ft'
    const cloned = request.clone({
      headers: request.headers.set(`Authentication`, `Token ${token}`),
      withCredentials: true
    });
    console.log(request);


    return next.handle(cloned).pipe(
      tap((evt: any) => {
        console.log(evt);
        console.log(Math.round(evt.loaded / evt.total * 100));
        this.api.load.next(true)
        // this.toastr.success('success',evt.status);
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.toastr.error('failed', (err.status).toString());
        }
        return of(err);
      }),

      finalize(() => {
        this.api.load.next(false);
      })
    );
  }
}

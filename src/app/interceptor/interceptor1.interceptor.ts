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
import { tap,catchError,of } from 'rxjs'

@Injectable()
export class Interceptor1Interceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'trdytf45gfyh76ft'
    const cloned = request.clone({
      headers: request.headers.set(`Authentication`, `Token ${token}` ),
      withCredentials:true
    });
    console.log(request);
    

    return next.handle(cloned).pipe(
      tap((evt:any)=>{
        console.log(evt);
        
        // this.toastr.success('success',evt.status);
      }),
      catchError ((err:any) =>{
        if(err instanceof HttpErrorResponse){
        this.toastr.error('failed', (err.status).toString());   
        }
        return of (err);
      })
    );
  }
}
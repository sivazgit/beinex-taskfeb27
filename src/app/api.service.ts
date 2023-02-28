import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public load:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  postUserDetails(userDetails:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users', userDetails , {reportProgress:true});
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postUserDetails(userDetails:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users', userDetails , {reportProgress:true});
  }

}

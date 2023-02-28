import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public userDetails:any;
  public name:any;
  public email:any;
  public phone:any;

  constructor(private _api:ApiService, private http:HttpClient){

  }


  postUser(){
    let userDetails ={
      name:this.name,
      email:this.email,
      phone:this.phone
    }
    this._api.postUserDetails(userDetails).subscribe((response=>{
      console.log('post',response);
      
    }))
      }
 
}

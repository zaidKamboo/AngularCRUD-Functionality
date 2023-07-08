import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http: HttpClient) {}
  //REGISTERING A USER
  userRegister(data: any):Observable<any>{
    return this.http.post("http://localhost:3000/signup", data);
  }
  // FETCH USER 
  getUserInfo(): Observable<any>{
    return this.http.get("http://localhost:3000/signup");
  }
}

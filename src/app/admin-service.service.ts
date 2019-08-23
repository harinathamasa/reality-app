import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  login(userName,password){
    var login = {
      "username":userName,
      "password":password
    }
    return this.http.post('https://bnv9mcj36j.execute-api.us-east-1.amazonaws.com/dev/admin/login', login);
  }
}

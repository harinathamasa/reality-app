import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  islogin$:Observable<boolean>
  private loggedInStatus = false;
  constructor(private http:HttpClient,private route: ActivatedRoute) { }

  setLoginStatus(value:boolean){
    this.loggedInStatus = value;
    this.islogin$
  }

  getLoginStatus():Observable<boolean>{
    if(this.loggedInStatus){
      return Observable.of(true);
    }else{
      return Observable.of(false);
    }
  }

  isLoggedIn(){
    return this.loggedInStatus;
  }

  login(userName,password){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);

    var login = {
      "username":userName,
      "password":password
    }
    return this.http.post('https://bnv9mcj36j.execute-api.us-east-1.amazonaws.com/dev/admin/login', login);
  }
}

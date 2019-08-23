import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginToEvent(eventLogin){
    console.log('event name'+eventLogin.event);
    console.log('event password'+eventLogin.eventPassword);
    localStorage.setItem("eventName","Reality Day");
    this.router.navigate(['/budgetSheet']);
  }

}

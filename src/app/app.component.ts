import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Huntington Reality-App';
  constructor(router:Router){
    let returnUrl = localStorage.getItem('returnUrl');
    console.log('return url...'+returnUrl);
    if(!returnUrl) return;
    localStorage.removeItem(returnUrl);
    router.navigateByUrl(returnUrl);
  }
}

import { AdminService } from './../admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-temp',
  templateUrl: './navbar-temp.component.html',
  styleUrls: ['./navbar-temp.component.css']
})
export class NavbarTempComponent implements OnInit {

  user: boolean;
  constructor(private adminService:AdminService) {
    adminService.getLoginStatus().subscribe(x =>{
      this.user = x;
      console.log('navbar subscribe=='+this.user);
    });
  }

  ngOnInit() {
   
  }

}

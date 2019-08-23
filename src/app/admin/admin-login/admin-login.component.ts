import { Router } from '@angular/router';
import { AdminService } from './../../admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  successMsg : String;
  isSuccess:boolean = true;
  errorMsg:string;
  result:any;
  constructor(private adminService: AdminService,private route:Router) { }

  ngOnInit() {
  }
  adminLogin(admin){
    this.adminService.login(admin.userName,admin.password).subscribe(res =>{
      this.result = res;
      if(this.result.loginMessage == 'successful'){
        this.route.navigate(['admin/create']);
      }else{
        this.successMsg = 'Login failed';
        this.isSuccess = false;
      }
    });
  }

  cancel(){
    this.route.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminLogin } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  AdminLogInfo:  AdminLogin  = { AdminUsername : null, AdminPassword : null};

//send login data as object
  SendAdminInfo(form){
      this.apiService.LoginRequest(form.value).subscribe((policy: AdminLogin)=>{
        console.log("Policy created, ", policy);
      });
  }

  

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
   
    
  }
  
 }

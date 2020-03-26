import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service/api.service';
import { Signup } from 'src/app/crud-class/policy';
declare var $ :any;


@Component({
  selector: 'app-upperbar',
  templateUrl: './upperbar.component.html',
  styleUrls: ['./upperbar.component.scss']
})
export class UpperbarComponent implements OnInit {

  policies:  Signup[];
  selectedPolicy:  Signup  = { id :  null , StNameEn: null , EdNameEn:null, RdNameEn:null, ThameEn:null, StNameAr:null, EdNameAr:null, RdNameAr:null, ThameAr:null, BirthDate:null,  Username:null, Phone:null, Email:null, Password:null};



 




//for add new data in database or update data
  createOrUpdatePolicy(form){
    if(this.selectedPolicy && this.selectedPolicy.id){
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Signup)=>{
        console.log("Policy updated" , policy);
      });
    }
    else{

      this.apiService.createPolicy(form.value).subscribe((policy: Signup)=>{
        console.log("Policy created, ", policy);
      });
    }
    
  }

  selectPolicy(policy: Signup){
    this.selectedPolicy = policy;
  }


//for delete data from database  
  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy: Signup)=>{
      console.log("Policy deleted, ", policy);
    });
  }



  //show login and register
  showLogReg:boolean = true;

  //show loged in
  showLog:boolean = false;

  //to close signup form
  hideSignUp(){
    $(".close").parent(".signup-form").slideUp(300);
  }
  //to close signup form
   hideLogin(){
    $(".close").parent(".login-form").slideUp(300);
  }

  //to show login form
  showLoginForm(){
    $(".login-form").slideDown(500);
    $(".signup-form").slideUp(100);
  }

  //to show signup form
  showSignupForm(){
    $(".signup-form").slideDown(500);
    $(".login-form").slideUp(100);
  }

  //to show terms
  showTerms(){
    $(".terms-cond").slideDown(400);
  }

  //to hide terms
  hideTerms(){
    $(".terms-cond").slideUp(400);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


  //for read data from database  
    this.apiService.readPolicies().subscribe((policies: Signup[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
    



    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });

    //to show agancies when choose orgnization
    $('select.regType').change(function(){
      var val = $(this).val();
      if(val === "orgnization"){
          $('.select-agency-group').fadeIn(400);
      }else 
          $('.select-agency-group').fadeOut(400);
    });

     //to show id when choose IT
     $('select.select-agency').change(function(){
      var val = $(this).val();
      if(val === "it"){
          $('.acadimic-id').fadeIn(400);
          $('.acadimic-id').css("display","inline-block");
      }else 
          $('.acadimic-id').fadeOut(400); 
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { UserRating } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {


  UserRating :UserRating = {Id : null, Rate : null};



 


  //send Search data as object
  SendSearchDate(form){
    this.apiService.UserRatingRequest(form.value).subscribe((policy: UserRating)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.UserRating);
   
  }



  showRate(){
    $(".rate-us").slideDown(500);
  }

  hideRate(){
    $(".rate-us").slideUp(500);
  }



  // to show detailes of my volunteers
  showDetails(){
    $(this).siblings(".card-body").toggleClass("show");
  }

 


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


    
  }

}

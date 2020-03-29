import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { EditTerms } from 'src/app/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {


  //Control display of terms list
   ListOne:boolean = true;
   ListTwo:boolean = true;
   ListThree:boolean = true;
   ListFour:boolean = true;
   ListFive:boolean = true;
   ListSix:boolean = true;
   ListSeven:boolean = true;

  



  Result:  EditTerms[];
  EditHome : EditTerms = {HeaderEn : null, HeaderAr : null, ListOneEn : null, ListOneAr : null, ListTwoEn : null, ListTwoAr : null, ListThreeEn : null, ListThreeAr : null, ListFourEn : null, ListFourAr : null, ListFiveEn : null, ListFiveAr : null, ListSixEn : null, ListSixAr : null, ListSevenEn : null, ListSevenAr : null};





  //send Search data as object
  SendSearchDate(form){
    this.apiService.EditTermsRequest(form.value).subscribe((policy: EditTerms)=>{
      console.log("Policy created, ", policy);
    });
  }



   ///test function
   showww(){
    console.log(this.EditHome);
   
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  //to add another list
  addList(){
    
   
    
      // let list = $(".one-row").html();
      // $(".cont").append(list);
  
    

  }


  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
    

    
  }

}

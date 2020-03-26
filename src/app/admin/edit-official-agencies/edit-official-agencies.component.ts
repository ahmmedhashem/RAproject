import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { AddEditAgancy } from 'src/app/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-edit-official-agencies',
  templateUrl: './edit-official-agencies.component.html',
  styleUrls: ['./edit-official-agencies.component.scss']
})
export class EditOfficialAgenciesComponent implements OnInit {


  Result:  AddEditAgancy[];
  AddEditAgancy : AddEditAgancy = {Country : null, NameEn : null, NameAr : null, Status : null};



//aray of countries
Countries = [
  {id: 1, name: "Country1"},
  {id: 2, name: "Country2"},
  {id: 3, name: "Country3"},
  {id: 4, name: "Country4"},
  {id: 5, name: "Country5"},
  {id: 6, name: "Country6"},
  {id: 7, name: "Country7"},
  {id: 8, name: "Country8"},
  {id: 9, name: "Country9"}

]


//to get the value of radio button for status
radioStatusChangeHandeler(event:any){
  this.AddEditAgancy.Status = event.target.value;
}



  //send Search data as object
  SendSearchDate(form){
    this.apiService.AddEditAgancyRequest(form.value).subscribe((policy: AddEditAgancy)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.AddEditAgancy);
   
  }


  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/OfficialAgencies'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

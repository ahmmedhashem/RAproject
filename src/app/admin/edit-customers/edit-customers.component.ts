import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { AddEditCustomer } from 'src/app/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {



  result:  AddEditCustomer[];
  AddEditCustomer : AddEditCustomer = {Country : null, NameEn : null, NameAr : null, Link : null, Image: null, Status : null};



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


//to get the name of the image
getFiles(event){
  this.AddEditCustomer.Image = event.target.files[0].name;
}



  //send Search data as object
  SendSearchDate(form){
    this.apiService.AddEditAgancyRequest(form.value).subscribe((policy: AddEditCustomer)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.AddEditCustomer);
   
  }


  //to get the value of radio button for status
  radioStatusChangeHandeler(event:any){
    this.AddEditCustomer.Status = event.target.value;
  }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/Customers'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

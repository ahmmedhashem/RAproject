import { Component, OnInit } from '@angular/core';
import { VolSearch } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-att-person-search',
  templateUrl: './att-person-search.component.html',
  styleUrls: ['./att-person-search.component.scss']
})
export class AttPersonSearchComponent implements OnInit {


  //control who logged in and show his data
  OrgAdmins:boolean = true;



  Result:  VolSearch[];
  AttByPersonSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date : null};

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

//aray of Cities
Cities = [
  {id: 1, name: "Cities1"},
  {id: 2, name: "Cities2"},
  {id: 3, name: "Cities3"},
  {id: 4, name: "Cities4"},
  {id: 5, name: "Cities5"},
  {id: 6, name: "Cities6"},
  {id: 7, name: "Cities7"},
  {id: 8, name: "Cities8"},
  {id: 9, name: "Cities9"}

]

  ///test function
  showww(){
    console.log(this.AttByPersonSearchResult);
  }

  //send Search data as object
  SendSearchDate(form){
    this.apiService.VolSearchRequest(form.value).subscribe((policy: VolSearch)=>{
      console.log("Policy created, ", policy);
    });
  }


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { VolSearch } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-wpsearch',
  templateUrl: './wpsearch.component.html',
  styleUrls: ['./wpsearch.component.scss']
})
export class WPsearchComponent implements OnInit {

  //to control search depended on type of login
    //control the search inputs hide or show depended on admin type
  OrgAdmin:boolean = true;
  CounAdmin:boolean = true;
  CityAdmin:boolean = true;
  
  

  Result:  VolSearch[];
  WPSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date : null};

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

//aray of Places
Places = [
  {id: 1, name: "place1"},
  {id: 2, name: "place2"},
  {id: 3, name: "place3"},
  {id: 4, name: "place4"},
  {id: 5, name: "place5"},
  {id: 6, name: "place6"},
  {id: 7, name: "place7"},
  {id: 8, name: "place8"},
  {id: 9, name: "place9"}

]

  ///test function
  showww(){
    console.log(this.WPSearchResult);
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

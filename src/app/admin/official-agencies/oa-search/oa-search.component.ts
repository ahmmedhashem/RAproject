import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
import { VolSearch } from 'src/app/crud-class/policy';

@Component({
  selector: 'app-oa-search',
  templateUrl: './oa-search.component.html',
  styleUrls: ['./oa-search.component.scss']
})
export class OaSearchComponent implements OnInit {

  Result:  VolSearch[];
OASearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date: null};

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

  ///test function
showww(){
  console.log(this.OASearchResult);
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

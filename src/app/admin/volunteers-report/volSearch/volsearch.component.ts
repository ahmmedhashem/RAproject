import { Component, OnInit } from '@angular/core';
import { VolSearch, CountO } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-volsearch',
  templateUrl: './volsearch.component.html',
  styleUrls: ['./volsearch.component.scss']
})
export class volSearchComponent implements OnInit {

Result:  VolSearch[];
VolRepSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date: null};

//aray of agancies
Agancies = [
  {id: 1, name: "Community Development Authority"},
  {id: 2, name: "General Directorate of Traffic"},
  {id: 3, name: "Higher colleges of technology"},
  {id: 4, name: "khair omah"},
  {id: 5, name: "Saaed"},
  {id: 6, name: "Sanid"},
  {id: 7, name: "Takatof"},
  {id: 8, name: "UAE Red Crescent Authority"},
  {id: 9, name: "Other"}

]

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
  console.log(this.VolRepSearchResult);
}





//array of days of ramadan
Dayes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


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

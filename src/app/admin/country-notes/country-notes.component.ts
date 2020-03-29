import { Component, OnInit } from '@angular/core';
import { CountryNotes } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-country-notes',
  templateUrl: './country-notes.component.html',
  styleUrls: ['./country-notes.component.scss']
})
export class CountryNotesComponent implements OnInit {

  //to control showing country to who
  OrgAdmin : boolean = true;


  Result:  CountryNotes[];
  CountryNotes : CountryNotes = {Country : null, NotesEn : null, NotesAr : null, Phone : null}

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



   //send Search data as object
   SendSearchDate(form){
    this.apiService.CountryNotesRequest(form.value).subscribe((policy: CountryNotes)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.CountryNotes);
   
  }
  

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {

    //to control showing country to who
    if(this.OrgAdmin == true){
      $(".countries").css("display","table-row");
      
    }else{
      $(".countries").css("display","none");
    }
  }

}

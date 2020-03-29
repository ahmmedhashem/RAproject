import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { EditCountryCity } from 'src/app/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-add-country-city',
  templateUrl: './add-country-city.component.html',
  styleUrls: ['./add-country-city.component.scss']
})
export class AddCountryCityComponent implements OnInit {


  //to control showing section type to who
  OrgAdmin : boolean = true;


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


  Result:  EditCountryCity[];
  CountryCity : EditCountryCity = {SectionType : null, Country : null, NameEn : null, NameAr : null, Image : null, PhoneCode : null, Status : null,}


  ///test function
  showww(){
    console.log(this.CountryCity);
   
  }

  //to get the name of the image
  getFiles(event){
    this.CountryCity.Image = event.target.files[0].name;
  }


  //send Search data as object
  SendSearchDate(form){
    this.apiService.EditCountryCity(form.value).subscribe((policy: EditCountryCity)=>{
      console.log("Policy created, ", policy);
    });
  }


  constructor(private routte:ActivatedRoute , private myroutter:Router,  private apiService: ApiService) { }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountriesCites'])
  }

  ngOnInit(): void {

    //to control showing section type to who
    if(this.OrgAdmin == true){
      $(".section-type").css("display","table-row");
      $(".image-row").css("display","table-row");
      
    }else{
      $(".section-type").css("display","none");
      $(".image-row").css("display","none");
    }

    //to show country when choose sub section
    $('select.select-section').change(function(){
      var val = $(this).val();
      if(val === "sub"){
          $(this).siblings('.country').fadeIn(400);
          $(this).siblings('.country').css("display","inline-block");
      }else 
          $(this).siblings('.country').fadeOut(400); 
    });


    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });


  }

}

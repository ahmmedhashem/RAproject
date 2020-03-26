import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { AddEditLocation } from 'src/app/crud-class/policy';
declare var $ :any;

@Component({
  selector: 'app-edit-workplaces',
  templateUrl: './edit-workplaces.component.html',
  styleUrls: ['./edit-workplaces.component.scss']
})
export class EditWorkplacesComponent implements OnInit {

   //to control country & city show to who depended on type of admin
   Orgadmin:boolean = true;
   CounAdmin:boolean = true;
   CityAdmin:boolean = true;



  Result:  AddEditLocation[];
  LocationDetailes : AddEditLocation = {NameEn : null, NameAr : null, Country : null, City : null, PersonReq : null, PlaceType : null, VolHours : null, MapCode : null, Days : null, AlertMessEn : null, AlertMessAr : null, Active : null};

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  Days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];



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

    



    //send Search data as object
  SendSearchDate(form){
    this.apiService.AddEditLocationRequest(form.value).subscribe((policy: AddEditLocation)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.LocationDetailes);
    console.log($('select.place-type').val());
    
   
  }

  // //to get the value of radio button for allow to
  // radioGenderChangeHandeler(event:any){
  //   this.LocationDetailes.AllowTo = event.target.value;
  // }

  //to get the value of radio button  -----> problem
  checkChangeHandeler(event:any){
    this.LocationDetailes.Days = event.target.value;
  }

  //to get the value of radio button for status
  radioStatusChangeHandeler(event:any){
    this.LocationDetailes.Active = event.target.value;
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/WorkPlaces'])
  }

  ngOnInit(): void {


     //to show Voluntary hours when choose Place Type
     $('select.place-type').change(function(){
      var val = $(this).val();
      console.log(val);
      if(val == "dist"|| val == "fill"){
          $(this).siblings('.Volhours').fadeIn(400);
          $(this).siblings('.Volhours').css("display","inline-block");
      }else 
          $(this).siblings('.Volhours').fadeOut(400); 
    });


  }

}

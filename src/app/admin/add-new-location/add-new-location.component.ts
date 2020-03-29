import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEditLocation } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';




declare var $ :any;

@Component({
  selector: 'app-add-new-location',
  templateUrl: './add-new-location.component.html',
  styleUrls: ['./add-new-location.component.scss']
})
export class AddNewLocationComponent implements OnInit {

  //to control country & city show to who depended on type of admin
  Orgadmin:boolean = true;
  CounAdmin:boolean = true;
  CityAdmin:boolean = true;
  

  Result:  AddEditLocation[];
  LocationDetailes : AddEditLocation = {NameEn : null, NameAr : null, Country : null, City : null, PersonReq : null, PlaceType : null, VolHours:null, MapCode : null, Days : null, AlertMessEn : null, AlertMessAr : null, Active : null};



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

     //aray of Place Types
     PlaceTyps = [
      {id: 1 , name: "distribution"}, // for men & women
      {id: 2 , name: "filling"}   // for women only
      ]

  Days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']


  SelectedDays:[];

  //send Search data as object
  SendSearchDate(form){
    this.apiService.AddEditLocationRequest(form.value).subscribe((policy: AddEditLocation)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.LocationDetailes);
    console.log(this.SelectedDays);
   
  }

  //to get the value of radio button
  // radioChangeHandeler(event:any){
  //   this.LocationDetailes.AllowTo = event.target.value;
  // }

  //to get the value of radio button  -----> problem
  checkChangeHandeler(event:any){
    this.LocationDetailes.Days = event.target.value;
  }


  // skills: [
  //   { name: '1',  selected: false, id: 1 },
  //   { name: '2',  selected: false, id: 2 },
  //   { name: '3',  selected: false, id: 3 },
  //   { name: '4',  selected: false, id: 4 },
  //   { name: '5',  selected: false, id: 5 },
  //   { name: '6',  selected: false, id: 6 },
  //   { name: '7',  selected: false, id: 7 },
  //   { name: '8',  selected: false, id: 8 },
  //   { name: '9',  selected: false, id: 9 },
  //   { name: '10',  selected: false, id: 10 },
  //   { name: '11',  selected: false, id: 11 },
  //   { name: '12',  selected: false, id: 12 },
  //   { name: '13',  selected: false, id: 13 },
  //   { name: '14',  selected: false, id: 14 },
  //   { name: '15',  selected: false, id: 15 },
  //   { name: '16',  selected: false, id: 16 },
  //   { name: '17',  selected: false, id: 17 },
  //   { name: '18',  selected: false, id: 18 },
  //   { name: '19',  selected: false, id: 19 },
  //   { name: '20',  selected: false, id: 20 },
  //   { name: '21',  selected: false, id: 21 },
  //   { name: '22',  selected: false, id: 22 },
  //   { name: '23',  selected: false, id: 23 },
  //   { name: '24',  selected: false, id: 24 },
  //   { name: '25',  selected: false, id: 25 },
  //   { name: '26',  selected: false, id: 26 },
  //   { name: '27',  selected: false, id: 27 },
  //   { name: '28',  selected: false, id: 28 },
  //   { name: '29',  selected: false, id: 29 },
  //   { name: '30',  selected: false, id: 30 },
  // ];



  







  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) {
    
    
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

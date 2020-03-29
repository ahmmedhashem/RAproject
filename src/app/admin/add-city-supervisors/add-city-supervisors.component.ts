import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEditCitySupervisor } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-add-city-supervisors',
  templateUrl: './add-city-supervisors.component.html',
  styleUrls: ['./add-city-supervisors.component.scss']
})
export class AddCitySupervisorsComponent implements OnInit {


  //control who log in and data to show
  OrgAdmins:boolean = true;
  CounAdmins:boolean = true;



  Result:  AddEditCitySupervisor[];
  AddEditCitySuper : AddEditCitySupervisor = {Username : null, Password : null, Fullname : null, Email : null,    Country : null, City : null, Status : null};




  //send Search data as object
  SendSearchDate(form){
    this.apiService.AddEditCitySupRequest(form.value).subscribe((policy: AddEditCitySupervisor)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.AddEditCitySuper);
   
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CitySupervisors'])
  }


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

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
     //to hide placeholder on form focus
     $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });

    //show password when hover eye icon (convert type from password to text)
	var PassFild = $(".password") 
	$(".show-pass").hover(function () {
		PassFild.attr('type', 'text');
	}, function(){
		PassFild.attr('type', 'password');
	});
  }

}

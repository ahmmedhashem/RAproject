import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-add-country-supervisors',
  templateUrl: './add-country-supervisors.component.html',
  styleUrls: ['./add-country-supervisors.component.scss']
})
export class AddCountrySupervisorsComponent implements OnInit {

  //control who log in and data to show
  OrgAdmins:boolean = true;



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




  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountrySupervisors'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { AddNewUser } from 'src/app/crud-class/policy';
declare var $ :any;


@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  Result:  AddNewUser[];
  AddNewUser : AddNewUser = {Username : null, Password : null, FullName : null, Email : null, Type : null, Country : null};





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

//aray of user types
UsersTypes = [
  {id: 1, name: "Site Manager"},
  {id: 2, name: "Country Supervisor"},
  {id: 3, name: "City Supervisor"}

]



  //send Search data as object
  SendSearchDate(form){
    this.apiService.AddNewUserRequest(form.value).subscribe((policy: AddNewUser)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.AddNewUser);
   
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/UserPrivileges'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService ) { }

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditHomePage } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent implements OnInit {


  Result:  EditHomePage[];
  EditHome : EditHomePage = {Banar : null, AboutTextEn : null, AboutTextAr : null};




  //send Search data as object
  SendSearchDate(form){
    this.apiService.EditHomePageRequest(form.value).subscribe((policy: EditHomePage)=>{
      console.log("Policy created, ", policy);
    });
  }



  //to get the name of the image
  getFiles(event){
    this.EditHome.Banar = event.target.files[0].name;
  }

   ///test function
   showww(){
    console.log(this.EditHome);
   
  }



  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

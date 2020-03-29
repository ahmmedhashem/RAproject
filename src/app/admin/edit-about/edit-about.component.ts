import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditAboutPage } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {


  Result:  EditAboutPage[];
  EditAbout : EditAboutPage = { AboutTextEn : null, AboutTextAr : null, Banar : null};




  //send Search data as object
  SendSearchDate(form){
    this.apiService.EditAboutPageRequest(form.value).subscribe((policy: EditAboutPage)=>{
      console.log("Policy created, ", policy);
    });
  }



  //to get the name of the image
  getFiles(event){
    this.EditAbout.Banar = event.target.files[0].name;
  }

   ///test function
   showww(){
    console.log(this.EditAbout);
   
  }


  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

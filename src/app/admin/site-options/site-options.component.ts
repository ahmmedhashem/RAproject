import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteOptEditOpt, SiteOptMemSett, SiteOptLangSett, SiteOptLogoSett, SiteOptContSett, SiteOptSocialSett } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;

@Component({
  selector: 'app-site-options',
  templateUrl: './site-options.component.html',
  styleUrls: ['./site-options.component.scss']
})
export class SiteOptionsComponent implements OnInit {


  // Edit Options
    EditOptResult:  SiteOptEditOpt[];
    EditOptions : SiteOptEditOpt = {SiteNameEn : null, SiteNameAr : null, SiteDescEn : null, SiteDescAr : null, KeywordsEn : null, KeywordsAr : null, SiteEmail : null, RamadanStartDate : null};


  // Member Settings
    MemSettResult:  SiteOptMemSett[];
    EditMemSett : SiteOptMemSett = {AllowNewReg : null, MemActivation : null, CalenderEditing : null};



  // Language Settings
    LangSettResult:  SiteOptLangSett[];
    LangSett : SiteOptLangSett = {DefultLang : null, OtherLang : null};



  // Logo Settings
    LogoSettResult:  SiteOptLogoSett[];
    LogoSett : SiteOptLogoSett = {SiteLogo : null, SiteColor : null};





  // Contact Settings
    ContSettResult:  SiteOptContSett[];
    ContSett : SiteOptContSett = {Phone : null, Email : null};


  // Socail Settings
    SocailSettResult:  SiteOptSocialSett[];
    SocailSett : SiteOptSocialSett = {Facebook : null, Twitter : null, Youtube : null, LinkedIn : null, Instagram : null, Snapchat : null};


   

  


//to get the value of radio button for allow new register
radioAllowNewRegChangeHandeler(event:any){
  this.EditMemSett.AllowNewReg = event.target.value;
}
//to get the value of radio button for member ship activation
radioMemShipChangeHandeler(event:any){
  this.EditMemSett.MemActivation = event.target.value;
}
//to get the value of radio button for disable calender editing
radioCalenderEditChangeHandeler(event:any){
  this.EditMemSett.CalenderEditing = event.target.value;
}
//to get the value of radio button for defult language
radioDefLangChangeHandeler(event:any){
  this.LangSett.DefultLang = event.target.value;
}
//to get the value of radio button for other language
radioOtherLangChangeHandeler(event:any){
  this.LangSett.OtherLang = event.target.value;
}

//to get the name of the image for logo image
getLogoFiles(event){
  this.LogoSett.SiteLogo = event.target.files[0].name;
}

//to get the value of radio button for site color
radioSiteColChangeHandeler(event:any){
  this.LogoSett.SiteColor = event.target.value;
}



  //send Search data as object
  SendSearchDate1(form){
    this.apiService.SitOptEditOptRequest(form.value).subscribe((policy: SiteOptEditOpt)=>{
      console.log("Policy created, ", policy);
    });
  }

  //send Search data as object
  SendSearchDate2(form){
    this.apiService.SiteOptMemSettRequest(form.value).subscribe((policy: SiteOptMemSett)=>{
      console.log("Policy created, ", policy);
    });
  }

  //send Search data as object
  SendSearchDate3(form){
    this.apiService.SiteOptLangSettRequest(form.value).subscribe((policy: SiteOptLangSett)=>{
      console.log("Policy created, ", policy);
    });
  }

  //send Search data as object
  SendSearchDate4(form){
    this.apiService.SiteOptLogoSettRequest(form.value).subscribe((policy: SiteOptLogoSett)=>{
      console.log("Policy created, ", policy);
    });
  }

  //send Search data as object
  SendSearchDate5(form){
    this.apiService.SiteOptContSettRequest(form.value).subscribe((policy: SiteOptContSett)=>{
      console.log("Policy created, ", policy);
    });
  }

  //send Search data as object
  SendSearchDate6(form){
    this.apiService.SiteOptSocailSettRequest(form.value).subscribe((policy: SiteOptSocialSett)=>{
      console.log("Policy created, ", policy);
    });
  }

 


  ///test function
  showww(){
    console.log(this.EditOptions);
    console.log(this.EditMemSett);
    console.log(this.LangSett);
    console.log(this.LogoSett);
    console.log(this.ContSett);
    console.log(this.SocailSett);
   
  }


  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

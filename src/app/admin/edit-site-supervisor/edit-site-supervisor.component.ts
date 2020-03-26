import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditMemVol } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';
declare var $ :any;


@Component({
  selector: 'app-edit-site-supervisor',
  templateUrl: './edit-site-supervisor.component.html',
  styleUrls: ['./edit-site-supervisor.component.scss']
})
export class EditSiteSupervisorComponent implements OnInit {
  Result:  EditMemVol[];
  EditSiteSup : EditMemVol = {Type : null, Password : null, FirstNameEn : null, SecondNameEn : null,         ThirdNameEn : null, FourthNameEn : null, FirstNameAr : null, SecondNameAr : null, ThirdNameAr : null,   FourthNameAr : null, Phone : null, Email : null, Gender : null, MemType : null, Place : null, Nationalty : null, NewsLetter : null, Notes : null, Status : null};

  //array of typies
  Types = ["Individual", "Family", "Agency"];


  //aray of nationalities
  Nationalities = [
    {id: 1, name: "Nationality1"},
    {id: 2, name: "Nationality2"},
    {id: 3, name: "Nationality3"},
    {id: 4, name: "Nationality4"},
    {id: 5, name: "Nationality5"},
    {id: 6, name: "Nationality6"},
    {id: 7, name: "Nationality7"},
    {id: 8, name: "Nationality8"},
    {id: 9, name: "Nationality9"}

  ]


  //aray of Locations
  Locations = [
    {id: 1, name: "Location1"},
    {id: 2, name: "Location2"},
    {id: 3, name: "Location3"},
    {id: 4, name: "Location4"},
    {id: 5, name: "Location5"},
    {id: 6, name: "Location6"},
    {id: 7, name: "Location7"},
    {id: 8, name: "Location8"},
    {id: 9, name: "Location9"}

  ]



  

  constructor(private routte:ActivatedRoute , private myroutter:Router, private apiService: ApiService) { }




  //send Search data as object
  SendSearchDate(form){
    this.apiService.EditSiteSupRequest(form.value).subscribe((policy: EditMemVol)=>{
      console.log("Policy created, ", policy);
    });
  }


  ///test function
  showww(){
    console.log(this.EditSiteSup);
  }



  //to get the value of radio button for gender
  radioGenderChangeHandeler(event:any){
    this.EditSiteSup.Gender = event.target.value;
  }


  //to get the value of radio button for news letter
  radioNewsChangeHandeler(event:any){
    this.EditSiteSup.NewsLetter = event.target.value;
  }


  //to get the value of radio button for status
  radioStatusChangeHandeler(event:any){
    this.EditSiteSup.Status = event.target.value;
  }




 

  





  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/SitesSupervisors'])
  }

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


    //to show country when choose sub section
    $('select.mem-type').change(function(){
      var val = $(this).val();
      if(val === "sup"){
          $(this).siblings('.place').fadeIn(400);
          $(this).siblings('.place').css("display","inline-block");
      }else 
          $(this).siblings('.place').fadeOut(400); 
    });


  }

}

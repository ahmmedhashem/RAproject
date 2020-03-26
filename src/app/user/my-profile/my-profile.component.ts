import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {



  showRate(){
    $(".rate-us").slideDown(500);
  }

  hideRate(){
    $(".rate-us").slideUp(500);
  }



  constructor() { }

  ngOnInit(): void {


    // for rating

    $(".btnrating").on('click',(function(e) {
	
      var previous_value = $("#selected_rating").val();
      
      var selected_value = $(this).attr("data-attr");
      $("#selected_rating").val(selected_value);
      
      $(".selected-rating").empty();
      $(".selected-rating").html(selected_value);
      
      for (let i = 1; i <= selected_value; ++i) {
      $("#rating-star-"+i).toggleClass('btn-warning');
      $("#rating-star-"+i).toggleClass('btn-default');
      console.log(i);
      }
      
      for (let ix = 1; ix <= previous_value; ++ix) {
      $("#rating-star-"+ix).toggleClass('btn-warning');
      $("#rating-star-"+ix).toggleClass('btn-default');
      
      }
     
      }));
      




  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.scss']
})
export class EditMyProfileComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MyProfile'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}

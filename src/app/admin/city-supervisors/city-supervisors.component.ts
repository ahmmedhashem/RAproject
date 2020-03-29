import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-supervisors',
  templateUrl: './city-supervisors.component.html',
  styleUrls: ['./city-supervisors.component.scss']
})
export class CitySupervisorsComponent implements OnInit {

  //control who is loged in and show his data only
  OrgAdmins:boolean = true;
  CounAdmins:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

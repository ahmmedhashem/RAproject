import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-supervisors',
  templateUrl: './country-supervisors.component.html',
  styleUrls: ['./country-supervisors.component.scss']
})
export class CountrySupervisorsComponent implements OnInit {

  //control who log in and data to show
  OrgAdmins:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

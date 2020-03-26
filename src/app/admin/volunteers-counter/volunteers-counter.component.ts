import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers-counter',
  templateUrl: './volunteers-counter.component.html',
  styleUrls: ['./volunteers-counter.component.scss']
})
export class VolunteersCounterComponent implements OnInit {

  //control who looged in and data to show
  OrgAdmins:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

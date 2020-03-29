import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-by-person',
  templateUrl: './attendance-by-person.component.html',
  styleUrls: ['./attendance-by-person.component.scss']
})
export class AttendanceByPersonComponent implements OnInit {

   //control who looged in and data to show
   OrgAdmins:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

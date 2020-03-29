import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-by-place',
  templateUrl: './attendance-by-place.component.html',
  styleUrls: ['./attendance-by-place.component.scss']
})
export class AttendanceByPlaceComponent implements OnInit {

   //control who looged in and data to show
   OrgAdmins:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

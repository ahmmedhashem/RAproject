import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
import { CountO } from 'src/app/crud-class/policy';

@Component({
  selector: 'app-volunteers-report',
  templateUrl: './volunteers-report.component.html',
  styleUrls: ['./volunteers-report.component.scss']
})
export class VolunteersReportComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  Country:CountO[];

  ngOnInit(): void {

    //for read data from database  
    this.apiService.readCountriesO().subscribe((Country: CountO[])=>{
      this.Country = Country;
      console.log(this.Country[1].name);
    })
  }

}

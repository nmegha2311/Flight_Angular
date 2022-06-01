import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FlightserviceService } from '../flightservice.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  data:any;
  data1:any;
  data2:any;
  constructor(private FlightService: FlightserviceService) { }
 
  ngOnInit(): void {
  }
  
getUsersSearchFlight(dept :string,arr:string)

{    this.FlightService.getUsersSearchFlight(dept,arr).subscribe((list)=>{
  this.data=list;
  console.log(list);
  });

  
}
getUsersSearchFlightbydate(startdate:any)

{    this.FlightService.getUsersSearchFlightbydate(startdate).subscribe((list)=>{
  this.data1=list;
    console.log(list);
  });
  }
getdetailsbyPNR(PNR:any)
{   
    this.FlightService.getdetailsbyPNR(PNR).subscribe((list)=>{
      this.data2=list;
    console.log(list);
});
}
}

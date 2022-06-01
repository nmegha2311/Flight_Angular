import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
data:any;
  constructor(private FlightService: FlightserviceService) { }

  ngOnInit(): void {
  }
  AddAirline(from:any,to:any,start:any,end:any,schedule:any,instrument:any,business:any,
    non_bus:any,cost:any,rows:any,meal:any,flight_no:any,airline:any,isactive:any)
  {
    this.FlightService.AddAirline(from,to,start,end,schedule,instrument,business,
      non_bus,cost,rows,meal,flight_no,airline,isactive).subscribe((list)=>{
        this.data="Successfully added airline and schedule details"
      console.log(list);
  },
  (error:any)=>
  {
  if(error.status===200)
  {
    this.data="Successfully added airline and schedule details"
    
    
  }
});
  }

}

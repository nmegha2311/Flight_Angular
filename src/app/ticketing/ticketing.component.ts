import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import{Route, Router} from '@angular/router';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent implements OnInit {
data:any;
data1:any;
  constructor(private FlightService: FlightserviceService, private route:Router) { }

  ngOnInit(): void {
  }
 getUsersSearchFlight(dept :string,arr:string)

{    
  this.FlightService.getUsersSearchFlight(dept,arr).subscribe((list)=>{
  this.data=list;
  console.log(list);
  });
}
  BookFlight(flight:string)

  {  
    this.data1=flight;
    console.log(this.data);
  this.route.navigate(['booking',this.data1]);
  }
}




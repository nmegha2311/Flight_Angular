import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
@Component({
  selector: 'app-blocking',
  templateUrl: './blocking.component.html',
  styleUrls: ['./blocking.component.css']
})
export class BlockingComponent implements OnInit {

  constructor(private flightservice: FlightserviceService ) { }
data:any;
data1:any;
  ngOnInit(): void {
  }
getAirline()

{    this.flightservice.getAirline().subscribe((list)=>{
  this.data=list;
  console.log(list);
  });
}
  Block(airline:string)
  {
    this.flightservice.Block(airline).subscribe((list)=>{
      
    console.log(this.data1);
    },
    (error:any)=>
  {
  if(error.status===200)
  {
    this.data=error.error.text;
    this.data1="Successfully Blocked airline "+airline;
    
  }
    });
  }
  }


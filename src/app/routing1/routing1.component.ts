import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
@Component({
  selector: 'app-routing1',
  templateUrl: './routing1.component.html',
  styleUrls: ['./routing1.component.css']
})
export class Routing1Component implements OnInit {
data$:any;

  constructor(public flight:FlightserviceService) 
  {


  }

  ngOnInit(): void {
    
  }

}

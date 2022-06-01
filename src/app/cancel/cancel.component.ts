import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
data:any;
  constructor(private flightservice:FlightserviceService) { }

  ngOnInit(): void {
  }
  Cancel(name:string)
  {
    this.flightservice.Cancel(name).subscribe((list)=>{
      this.data="Ticket cancelled successfully";
    console.log(this.data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

  constructor(private FlightService: FlightserviceService) { }
  data2:any;
  ngOnInit(): void {
  }
  getdetailsbyPNR(PNR:any)
  {   
      this.FlightService.getdetailsbyPNR(PNR).subscribe((list)=>{
        this.data2=list;
      console.log(list);
  });
}}

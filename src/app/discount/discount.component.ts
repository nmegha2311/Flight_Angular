import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

constructor(private FlightService: FlightserviceService,private router:ActivatedRoute) { }
data:any;
data2:any;
Myparam1:any;
  ngOnInit(): void {
    this.router.params.subscribe((params)=> this.Myparam1=params['this.data']);
    this.data2=this.data
  console.log(this.Myparam1);
  }
Redeem(from_place:any)
{
  this.FlightService.Redeem(from_place).subscribe((list)=>{
    if(list==true)
    {
      this.data="Coupon Redeemed  sucessfully"
    }
    else{
      this.data="Invalid Coupon code"
    }
      console.log(list);
  });
}
Book()
{
  console.log(this.Myparam1);
  this.data="Booked ticket suceesully. Please find you PNR number "+this.Myparam1;
}

}

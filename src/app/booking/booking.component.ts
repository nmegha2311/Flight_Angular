import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
dat1:any;
Myparam:any;
Myparam1:any;
  constructor(private route:ActivatedRoute,private router:Router,private flightservice:FlightserviceService) { }
  data:any;
  ngOnInit(): void {
    
  
  this.route.params.subscribe((params)=> this.Myparam=params['this.data']);
  console.log(this.Myparam);

}
Booking(name:string,Emailid:string,Nos:string,
  Name:string,Gender:string,Age:string,Meal:string,
  Seat_no:string)
{
  this.flightservice.Booking(name,Emailid,Nos,Name,Gender,Age,Meal,Seat_no,this.Myparam).subscribe((list:any)=>{
    if(list.status=== 200)
    {
        this.router.navigate(["Discount"]);
    }
    
  console.log(this.data);
  },
  (error:any)=>
  {
  if(error.status===200)
  {
    this.data=error.error.text;
    
    this.router.navigate(["Discount",this.data]);
  }
});
}
}
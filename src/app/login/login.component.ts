import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import {Router} from '@angular/router';
import {RoutingComponent} from '../routing/routing.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private FlightService: FlightserviceService, private route:Router) { }
data:any;
data1:any;
error:any;
token:any;

  ngOnInit(): void {
    
  }
Login(username:string,password: string)
{
  this.FlightService.Login(username,password).subscribe((list)=>{
    this.data=list;
    this.token=this.data.token;
    
    if(this.data.token!='')
    {
      
      
   this.route.navigate(['/Routing1']);    
    }
  
    
   
   
},(error)=>{
console.error('user id does not exist')
this.error="user id does not exist"

})

}
User(username:string,password: string)
{
  this.FlightService.User(username,password).subscribe((list)=>{
    
    this.data=list;

    
    if(this.data.token!='')
    {
      
      
   this.route.navigate(['/User']);    
    }
  
    
   
   
},(error)=>{
console.error('user id does not exist')
this.error="user id does not exist"

})}}


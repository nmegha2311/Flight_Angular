import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
data:any;
error:any;
  constructor(private FlightService: FlightserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  Register(username:string,password: string)
  {
    this.FlightService.Register(username,password).subscribe((list)=>{
      this.data="Registered sucessfully";
    });
  
      
      
  }}


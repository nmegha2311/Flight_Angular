import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {
baseurl:any;
baseurl1:any;
baseurl2:any;
baseurllog:any;
baseurl3:any;
base:any;
public _isloggedin$ =new BehaviorSubject<boolean>(false);

public _islog: Boolean=false;


isloggedin$=this._isloggedin$.asObservable();
  constructor(private httpclient: HttpClient) {



    this.base='http://localhost:5000/'


    this.baseurl='http://localhost:5004/api/values'
    this.baseurl1='http://localhost:5004/api/cancel'
    this.baseurllog='http://localhost:5006/api/values'
    this.baseurl3='http://localhost:5005/api/values/'
   }
   getUsersSearchFlight(departureplace: string, arriveplace: string)
   {
     return this.httpclient.get(this.base+ 'flighSearch/'+departureplace + '/'+arriveplace);
   }

   getUsersSearchFlightbydate(startdate: any)
   {
     return this.httpclient.get(this.base+ 'flighSearch/'+startdate);
   }
   Redeem(disc: any)
   {
     return this.httpclient.get(this.base+ 'Airline/discount/'+disc);
   }
   Cancel(name: any)
   {
     return this.httpclient.delete(this.baseurl1+'/'+name);
   }

   getdetailsbyPNR(PNR: any)
   {
    return this.httpclient.get(this.base+ 'ticketing/'+PNR);
   }
  getAirline()
  {
  return this.httpclient.get(this.base+ 'Airline/get/');
  }
   Login(username: any, password:any)
   {

    return this.httpclient.get(this.base+ 'login/'+username+'/'+password).pipe(
      tap((response:any)=>{
        console.log(response.token);
        localStorage.setItem('Auth',response.token);
       
        this._islog=true;
      })
    
    );
   }

   User(username: any, password:any)
   {
    return this.httpclient.get(this.base+ 'user/'+username+'/'+password);
   }
   Register(username: any, password:any)
   {
    return this.httpclient.get(this.baseurllog+ '/register/'+username+'/'+password);
   }
   Block(airline:string)
   {
     const value={
      'isActive':'no'
     };
    return this.httpclient.put(this.baseurl3 + airline,value);
   }
   Booking(name:string,Emailid:string,Nos:string,
    Name:string,Gender:string,Age:string,Meal:string,
    Seat_no:string,Flightno:string)
    {
      const cust=
    {
      Emailid:Emailid,
      Name:name,
      Nos:Nos,
      RName:Name,
      age:Age,
      meal:Meal,
      SeatNumbers:Seat_no,
      Flight_Number:Flightno
    }
      return this.httpclient.post(this.baseurl,cust);
    }
  
   AddAirline(from:any,to:any,start:any,end:any,schedule:any,instrument:any,business:any,
    non_bus:any,cost:any,rows:any,meal:any,flight_no:any,airline:any,isactive:any)
   {
     const airline1={
      from_place:from,
      to_place:to,
      startdate:start,
      Enddate:end,
      Instrument:instrument,
      business:business,
      non_business:non_bus,
      cost:cost,
      rows:rows,
      meal:meal,
      Flightno:flight_no,
      Airline:airline,
      isActive:isactive

     }
    return this.httpclient.post(this.baseurl3,airline1);
   }


}

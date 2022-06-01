import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import {HttpClientModule} from '@angular/common/http';
import { FlightserviceService } from './flightservice.service';
import {Routes} from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { Routing1Component } from './routing1/routing1.component';
import { PnrComponent } from './pnr/pnr.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { BookingComponent } from './booking/booking.component';
import { BlockingComponent } from './blocking/blocking.component';
import { CancelComponent } from './cancel/cancel.component';
import { DiscountComponent } from './discount/discount.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes:Routes = [

  {path:'list',component:FlightSearchComponent},
  {path:'AddAirline',component:AirlineComponent},
  {path:'Login',component:LoginComponent},
  {path:'Routing',component:RoutingComponent},
  {path:'Routing1',component:Routing1Component},
  {path:'Ticketing',component:TicketingComponent},
  {path:'booking/:this.data',component:BookingComponent},
  {path:'blocking',component:BlockingComponent},
  {path:'cancel', component:CancelComponent},
  {path:'Discount/:this.data',component:DiscountComponent},
  {path:'PNR',component:PnrComponent},
  {path:'Register',component:RegisterComponent},
  {path:'User',component:UserComponent},
  
  

]
@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    AirlineComponent,
    LoginComponent,
    RoutingComponent,
    Routing1Component,
    PnrComponent,
    TicketingComponent,
    BookingComponent,
    BlockingComponent,
    CancelComponent,
    DiscountComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FlightserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

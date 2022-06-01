import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { LoginComponent } from './login/login.component';
import { FlightserviceService } from './flightservice.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import{RoutingComponent} from './routing/routing.component'
const routes: Routes = [
  {path:'list',component:FlightSearchComponent},
  {path:'AddAirline',component:AirlineComponent},
  {path:'Routing',component:RoutingComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

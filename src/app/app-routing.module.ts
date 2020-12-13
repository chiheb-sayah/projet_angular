import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightAjoutComponent } from './flight-ajout/flight-ajout.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path : 'Home', component : HomeComponent},
  {path : 'Flights', component : FlightListComponent},
  {path : 'Flights/:id', component : FlightEditComponent},
  {path : 'Add-Flight', component : FlightAjoutComponent},
  {path : 'SignUp', component : SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

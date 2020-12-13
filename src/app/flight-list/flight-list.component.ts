import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightFilter } from '../model/flight-filter';
import { FlightService } from '../Shared/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  filter  : FlightFilter;
  selectedFlight: Flight;
  feedback: any = {};
  flightsList : Flight[];
  alertVariable : number ;
  showAddFormVaribale : boolean;


  constructor(private flightService: FlightService, private route : Router) {
  }

  ngOnInit() {
    this.filter = new FlightFilter();
    this.showAddFormVaribale = false;
    this.alertVariable = 0;
    this.flightService.getAllFlights().subscribe(
      data => this.flightsList = data
    );
  }

  showAlert(B : boolean){
    if(B)
      this.alertVariable = 1;
    else
      this.alertVariable = 2;  
    this.flightService.getAllFlights().subscribe(
      data => this.flightsList = data
    );
  }

  showAddForm(){
    this.route.navigate(['/Add-Flight'])
  }

  search(){
    this.flightService.getFlightBySearch("?from="+this.filter.from+ "&to=" + this.filter.to).subscribe(
      data => this.flightsList = data 
    );
  }
  cancel(){
    this.flightService.getAllFlights().subscribe(
      data => this.flightsList = data
    );
  }
}

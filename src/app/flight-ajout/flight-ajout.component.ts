import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightService } from '../Shared/flight.service';

@Component({
  selector: 'app-flight-ajout',
  templateUrl: './flight-ajout.component.html',
  styleUrls: ['./flight-ajout.component.css']
})
export class FlightAjoutComponent implements OnInit {

  flight :Flight;

  constructor(private flightService : FlightService, private route : Router) { }

  ngOnInit(): void {
    this.flight = new Flight();
    this.flightService.getAllFlights().subscribe(
      data => {this.flight.id = data[data.length-1].id +1
      console.log(this.flight.id)}
    );
  }

  addFlight(){
    this.flightService.addFlight(this.flight).subscribe(
      () => this.route.navigate(['/Flights'])
    );
  }

}

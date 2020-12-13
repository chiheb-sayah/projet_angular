import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightService } from '../Shared/flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  flight: Flight;
  editForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flightService.getFlightById(this.route.snapshot.params.id).subscribe(
      F => this.flight = F
    );
  }

  save() {
    console.log(this.flight);
    this.flightService.updateFlight(this.flight).subscribe(
      () => this.router.navigate(['/Flights'])
    );
  }

  cancel() {
    this.router.navigate(['/Flights']);
  }

}

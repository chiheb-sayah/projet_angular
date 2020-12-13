import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { send } from 'process';
import { Flight } from '../model/flight';
import { FlightService } from '../Shared/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() item : Flight;
  isDeleted : boolean;
  @Output() sendIsDeleted = new EventEmitter<boolean>();

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  delete(){
    this.flightService.deleteFlight(this.item.id).subscribe(
      ()=> {
        this.isDeleted = true;
        this.sendIsDeleted.emit(this.isDeleted);
      }
    );
  }
}

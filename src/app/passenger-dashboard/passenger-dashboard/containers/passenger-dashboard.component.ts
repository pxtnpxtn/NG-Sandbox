import { PassengerDashboardService } from './../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';

import { Passenger } from '../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  constructor(
    private passengerService: PassengerDashboardService
  ) { }

}

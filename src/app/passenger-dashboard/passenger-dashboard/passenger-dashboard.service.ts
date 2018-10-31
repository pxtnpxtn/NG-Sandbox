import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

  getPassengers(): Passenger[] {
    return [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }

  // getPassengers(): Observable<Passenger[]> {
  //   return this.http
  //     .get(PASSENGER_API)
  //     .pipe(
  //       map((response: Response) => response.json())
  //     )
  // }

  // updatePassenger(passenger: Passenger): Observable<Passenger> {
  //   return this.http
  //     .put(`${PASSENGER_API}/${passenger.id}`, passenger)
  //     .pipe(
  //       map((response: Response) => response.json())
  //     )
  // }

  // removePassenger(passenger: Passenger): Observable<Passenger> {
  //   return this.http
  //     .delete(`${PASSENGER_API}/${passenger.id}`)
  //     .pipe(
  //       map((response: Response) => response.json())
  //     )
  // }

  constructor(private http: Http) { }

}

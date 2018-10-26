import { Observable } from 'rxjs';
import { Passenger } from './models/passenger.interface';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operator/map";

const PASSENGER_API: string = '/api/passengers'

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {


  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
  }

  constructor(private http: Http) { }

}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class DataService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "joe1@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018"),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevinJ@gmail.com",
        isActive: false,
        registered: new Date("03/11/2017"),
        hide: true
      },
      {
        firstName: "Karen",
        lastName: "Williams",
        email: "SMEAGOL@gmail.com",
        isActive: true,
        registered: new Date("11/02/2016"),
        hide: true
      }
    ];
  }
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

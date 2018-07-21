import { Component, OnInit } from "@angular/core";

import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses: object = {};
  currentStyles: object = {};
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
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

    this.loaded = true;

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser() {
    this.user.isActive = true;
    this.user.hide = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "0" : "40px"
    };
  }

  toggleHide(user) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}

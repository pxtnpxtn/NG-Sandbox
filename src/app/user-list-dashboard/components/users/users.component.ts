import { Component, OnInit, ViewChild } from "@angular/core";

import { User } from "../../models/User";
import { DataService } from "./../../services/data.service";
// import { subscribe } from "rxjs";

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
  @ViewChild("userForm") form: any;
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    this.setCurrentClasses();
    this.setCurrentStyles();
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

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is invalid");
    } else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();

      this.dataService.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}

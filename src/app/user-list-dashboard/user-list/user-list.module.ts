import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { UserComponent } from "../components/user/user.component";
import { UsersComponent } from "../components/users/users.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

import { DataService } from "../services/data.service";
import { UserListComponent } from './user-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UserComponent, UsersComponent, NavbarComponent, UserListComponent],
  providers: [DataService],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }

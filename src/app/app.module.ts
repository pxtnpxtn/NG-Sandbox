import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserListModule } from "./user-list-dashboard/user-list/user-list.module";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CommonModule, UserListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// Service
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }

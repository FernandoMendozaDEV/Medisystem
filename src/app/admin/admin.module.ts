import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './pages/admin-container/admin-container.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
  DashboardComponent,
  AdminContainerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }

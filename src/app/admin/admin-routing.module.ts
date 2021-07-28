import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminContainerComponent } from './pages/admin-container/admin-container.component';


const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Web/web-routing.module').then( m => m.WebRoutingModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then( m => m.AuthRoutingModule )
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then( m => m.AdminRoutingModule )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

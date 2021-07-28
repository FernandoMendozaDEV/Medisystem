import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'v1',
        component: HomeComponent
      },
      {
        path: 'catalogo',
        component: CatalogoComponent
      },
      {
        path: '**',
        redirectTo: 'v1'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }

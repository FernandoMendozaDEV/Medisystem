import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    ContactoComponent,
    HomeSectionComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }

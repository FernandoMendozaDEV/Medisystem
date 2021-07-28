import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticiasComponent } from './components/noticias/noticias.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    ContactoComponent,
    HomeSectionComponent,
    QuienesSomosComponent,
    FooterComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }

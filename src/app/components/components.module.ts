import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    NavbarComponent, 
    FooterComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent, 
    FooterComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ComponentsModule { }

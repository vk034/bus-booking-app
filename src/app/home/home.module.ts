import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatCardModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,  
} from '@angular/material';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }

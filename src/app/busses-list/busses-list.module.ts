import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussesListComponent } from './busses-list.component';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [ 
    BussesListComponent 
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BussesListComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BussesListModule { }

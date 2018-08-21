import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussesListComponent } from './busses-list.component';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [ 
    BussesListComponent 
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    BussesListComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class BussesListModule { }

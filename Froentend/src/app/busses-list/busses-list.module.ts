import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule, 
  MatInputModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { BussesListComponent } from './busses-list.component';
import { SeatlayoutComponent } from './seatlayout/seatlayout.component';
import { GetPassengerListComponent } from './get-passenger-list/get-passenger-list.component';

@NgModule({
  declarations: [ 
    BussesListComponent, 
    SeatlayoutComponent, 
    GetPassengerListComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    BussesListComponent
  ]
})
export class BussesListModule { }

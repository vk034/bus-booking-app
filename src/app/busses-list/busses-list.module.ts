import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussesListComponent } from './busses-list.component';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { SeatlayoutComponent } from './seatlayout/seatlayout.component';

@NgModule({
  declarations: [ 
    BussesListComponent, SeatlayoutComponent 
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatGridListModule
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

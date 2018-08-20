import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(Date.now()+(30 * 24 * 60 * 60 * 1000));
  from = new FormControl();
  to = new FormControl();
  @ViewChild('picker') datePicker: MatDatepicker<Date>;

  //swap TO and FROM places
  swap(){
    var temp;
    temp = this.from.value;
    this.from.setValue(this.to.value);
    this.to.setValue(temp);
  }

  constructor() { }

  ngOnInit() {
  }

  //validating TO, FROM & DATE OF JOURNEY inputs
  validate(){
    if(this.to.value == this.from.value){
      alert("TO and FROM places are same");
    }
    else{
      if(!(this.datePicker._selected))
      {
        this.datePicker.open(); 
      }

    }
  }


}

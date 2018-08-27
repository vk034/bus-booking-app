import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatDatepicker } from '@angular/material/datepicker';
import { BussesListService } from '../shared/busses-list.service';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fromPlace: any = [];
  toPlace: any = [];
  errMsg: string;

  filteredFrom: Observable < string[] > ;
  filteredTo: Observable < string[] > ;

  minDate = new Date();
  maxDate = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));

  from = new FormControl();
  to = new FormControl();
  doj = new FormControl();

  @ViewChild('picker') datePicker: MatDatepicker < Date > ;

  constructor(private router: Router, private bussesListService: BussesListService) { }

  ngOnInit() {
    this.bussesListService.getBusList().subscribe(data => {
      data.forEach(element => {
        if (this.fromPlace.indexOf(element.source) === -1) {
          this.fromPlace.push(element.source)
        }
        if (this.toPlace.indexOf(element.destination) === -1) {
          this.toPlace.push(element.destination)
        }
      });
    }, error => {
      this.errMsg = error
    });

    this.filteredFrom = this.from.valueChanges.pipe(
      startWith(''),
      map(value => this._filterFrom(value)));

    this.filteredTo = this.to.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTo(value)));

  }
  private _filterFrom(value: string): string[] {
    const filtervalue = value.toLowerCase();
    return this.fromPlace.filter(option => option.toLowerCase().includes(filtervalue));
  }

  private _filterTo(value: string): string[] {
    const filtervalue = value.toLowerCase();
    return this.toPlace.filter(option => option.toLowerCase().includes(filtervalue));
  }


  //swap TO and FROM places
  swap() {
    var temp;
    temp = this.from.value;
    this.from.setValue(this.to.value);
    this.to.setValue(temp);
  };

  validate() {
    if (this.to.value == this.from.value) {
      alert("TO and FROM places are same");
    } else {
      if (this.fromPlace.indexOf(this.from.value) == -1) {
        alert("From is not valid")
      } else {
        if (this.toPlace.indexOf(this.to.value) == -1) {
          alert("Destination is not valid")
        } else {
          if (!(this.datePicker._selected)) {
            this.datePicker.open();
          } else {
            let traveldate = new DatePipe('en-IN').transform(this.doj.value,'dd/MM/yyyy');
            this.bussesListService.setSearchData({
              "source": this.from.value,
              "destination": this.to.value,
              "travelDate": traveldate
            })
            this.router.navigate(['/busses']);
          }
        }
      }
    }
  }
}

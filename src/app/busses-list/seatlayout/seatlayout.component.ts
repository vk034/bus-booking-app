import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { style } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-seatlayout',
  templateUrl: './seatlayout.component.html',
  styleUrls: ['./seatlayout.component.css']
})
export class SeatlayoutComponent implements OnInit {


  numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"","","","","","","","","",21,"",22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  forbidnumbers = [""];
  ele=document.getElementById("seat");
  showStyle:false;
  seatsBooked = [];

  constructor() { }

  ngOnInit() {
  }
  
  display(num:number){
   /* let seatid = this.seatsBooked.indexOf(num);
    if(seatid > -1){

    } */
   // alert(num);
    // this.ele.style.color="yellow";
  //console.log("this is seat number:" +num);
  
  }

}

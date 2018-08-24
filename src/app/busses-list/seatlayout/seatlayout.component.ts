import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seatlayout',
  templateUrl: './seatlayout.component.html',
  styleUrls: ['./seatlayout.component.css']
})
export class SeatlayoutComponent implements OnInit {
  seatNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"","","","","","","","","",21,"",22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  forbidnumbers = [""];
  seatsBooked = [1,2,5];
  seatsChoose = [];

  constructor() { }

  ngOnInit() {
  }
  
  chooseSeat(seat: number){
   let seatid = this.seatsChoose.indexOf(seat);
    if(seatid > -1){
      this.seatsChoose.splice(seatid, 1);
    }else{
      this.seatsChoose.push(seat);
    }
    console.log(this.seatsChoose);
  }

}

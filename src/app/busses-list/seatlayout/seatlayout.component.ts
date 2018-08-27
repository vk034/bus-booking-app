import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatTableDataSource } from '@angular/material/';

export interface PassengerDetails {
  Gender: string;
  Name : string;
  Age: string;
  SeatNo: string;
}

@Component({
  selector: 'app-seatlayout',
  templateUrl: './seatlayout.component.html',
  styleUrls: ['./seatlayout.component.css']
})
export class SeatlayoutComponent implements OnInit {
  seatNumber: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"","","","","","","","","",21,"",22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  // forbidnumbers = [""];
  seatsBooked: any = [1,2,5];
  seats = [];
  seatsChoose: any = [];

  isValidFormSubmitted = false;
  passengerForm: FormGroup;
  // displayForm:boolean=false;
  cols:string[] = ["Gender","Name","Age","SeatNo"];
  passengerData:PassengerDetails[]=[];

  datasource = new MatTableDataSource(this.passengerData);
  selectedGender:string = "male";

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    for(let i in this.seatNumber){
      let seatStatus = true;
      if(this.seatsBooked.includes(this.seatNumber[i])){
        seatStatus = false;
      }
      this.seats.push({
        seatNo: this.seatNumber[i],
        seatStatus
      })
    }
    //Passenger List Form
    this.passengerForm= this.fb.group({
      pPName: ['',Validators.required],
      pEmail: ['',[Validators.required, Validators.email]],
      pPhone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10),Validators.pattern('[0-9]+')]]
    });
  }

  get inputs(){
    return this.passengerForm.controls;
  }
  
  chooseSeat(seat: any){
    if(seat.seatStatus){
      let seatid = this.seatsChoose.indexOf(seat.seatNo);
      if(seatid > -1){
        let index;
        this.seatsChoose.splice(seatid, 1);
        this.passengerData.filter(item=>{if(item.SeatNo == seat.seatNo.toString()){ index=this.passengerData.indexOf(item);}});
        this.passengerData.splice(index,1);
        this.datasource = new MatTableDataSource(this.passengerData);
      }else{
        if(this.seatsChoose.length == 4){
          alert("maximum 4 seats are allowed to book");
          return;
        }
        this.seatsChoose.push(seat.seatNo);
        this.passengerData.push({Name:"",Age: "", Gender: "", SeatNo: seat.seatNo.toString()});
        this.datasource = new MatTableDataSource(this.passengerData);
      }
      console.log(this.seatsChoose);
    }
  }

  onSubmit(){
    this.isValidFormSubmitted = true;
    if (this.passengerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.passengerForm.value));
  }
}

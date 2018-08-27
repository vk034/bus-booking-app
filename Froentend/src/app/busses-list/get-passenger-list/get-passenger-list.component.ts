import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-get-passenger-list',
  templateUrl: './get-passenger-list.component.html',
  styleUrls: ['./get-passenger-list.component.css']
})
export class GetPassengerListComponent implements OnInit {

  isValidFormSubmitted = false;
  passengerForm:FormGroup;
  displayForm:boolean=false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passengerForm= this.fb.group({
      pPName: ['',Validators.required],
       pEmail: ['',[Validators.required, Validators.email]],
      pPhone: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10),Validators.pattern('[0-9]+')]]
    });
  }

  get inputs(){
    return this.passengerForm.controls;
  }
  onSubmit(){
    this.isValidFormSubmitted = true;
  
    if (this.passengerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.passengerForm.value));
  }

}

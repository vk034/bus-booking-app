import { Component, OnInit } from '@angular/core';
import { BusList } from '../shared/iBusList';
import { Router } from '@angular/router';
import { BussesListService } from '../shared/busses-list.service';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-busses-list',
  templateUrl: './busses-list.component.html',
  styleUrls: ['./busses-list.component.css']
})
export class BussesListComponent implements OnInit {
  busList: BusList[];
  filterBusList: BusList[];
  errMsg: string;
  amenities = [];
  public show=Array(12).fill(false);
  //public count=Array(20);

  constructor(private router: Router, private bussesListService: BussesListService){
    this.bussesListService.observeSearchData.subscribe(data=>{
      if(!data){this.router.navigate(['/home'])}
      this.bussesListService.getBusList().subscribe(filteredBusList=>{
        this.busList = filteredBusList.filter(bus=>{
          for(let option of Object.keys(data)){
            if(bus[option] != data[option]){
              return false;
            }
          }
          return true;
        }); 
        this.filterBusList= this.busList;
      }, error => {this.errMsg = error});
    });
  }

  ngOnInit() {}
 
  toggle(index:number)
  {
    //console.log("before"+this.show[index]);
    this.show[index]=!this.show[index];
    
  }

  //Aminities Filter Functions
  onChkChange(ameniti: string){
    let id = this.amenities.indexOf(ameniti);
    if(id > -1){
      this.amenities.splice(id, 1);
    }else{
      this.amenities.push(ameniti);
    }
    console.log(this.amenities);
    this.filterBusList = this.busList.filter(bus =>{
      for(let option of this.amenities) {
        if(!bus[option]) return false;
      }
      return true;
    })
  }

}

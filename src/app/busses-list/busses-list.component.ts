import { Component, OnInit } from '@angular/core';
import { BusList } from '../shared/iBusList';
import { Router } from '@angular/router';
import { BussesListService } from '../shared/busses-list.service';

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
  showBusSeats: boolean = false;
  public show = Array().fill(false);

  constructor(private router: Router, private bussesListService: BussesListService){ }

  ngOnInit() {
    this.bussesListService.observeSearchData.subscribe(data=>{
      if(!data || !Object.keys(data).length){this.router.navigate(['/home'])}
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
 
  toggleBusSeats(index){
    this.show[index] = !this.show[index];
  }

  //Aminities Filter Functions
  onChkChange(ameniti: string){
    let id = this.amenities.indexOf(ameniti);
    if(id > -1){
      this.amenities.splice(id, 1);
    }else{
      this.amenities.push(ameniti);
    }
    // console.log(this.amenities);
    this.filterBusList = this.busList.filter(bus =>{
      for(let option of this.amenities) {
        if(!bus[option]) return false;
      }
      return true;
    })
  }

}

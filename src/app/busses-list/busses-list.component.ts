import { Component, OnInit } from '@angular/core';
import { BusList } from '../shared/iBusList';

import { BussesListService } from '../shared/busses-list.service';

@Component({
  selector: 'app-busses-list',
  templateUrl: './busses-list.component.html',
  styleUrls: ['./busses-list.component.css']
})
export class BussesListComponent implements OnInit {
  busList: BusList[];
  errMsg: string;

  constructor(private bussesListService: BussesListService) {
    this.bussesListService.getBusList().subscribe(data=>{
      this.busList = data;
    }, error => {this.errMsg = error});
  }

  ngOnInit() {
  }

}

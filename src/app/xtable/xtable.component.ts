import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

declare var $: any;

@Component({
  selector: 'app-xtable',
  templateUrl: './xtable.component.html',
  styleUrls: ['./xtable.component.css']
})
export class XtableComponent implements OnInit {
  tableData: Array<any>;
  tableHeader: Array<any>;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
       this.dataService.getXtableDataFromJson()
      .subscribe((data: any[]) => {
        this.tableHeader = data[0].cells;
        data.splice(0, 1); 
        this.tableData = data;
        
        this.doDirtyHack();
      });
  }
  
  private doDirtyHack() {
    $(document).ready(function() {
      $('.ui.checkbox').checkbox();
    });
  }

}

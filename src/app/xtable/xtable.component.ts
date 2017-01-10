import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

declare var jQuery: any;

@Component({
  selector: 'x-table',
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
              
              this.doDirtyHackForCheckbox();
            });
  }
  
  private doDirtyHackForCheckbox() {
    jQuery(document).ready(function() {
      jQuery('.ui.checkbox').checkbox();
    });
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DataService } from '../shared/data.service';

declare var A: any;

@Component({
  selector: 'xaladin',
  templateUrl: './xaladin.component.html',
  styleUrls: ['./xaladin.component.css']
})
export class XaladinComponent implements OnInit, AfterViewInit {
  @ViewChild('makeAladin') aladinDiv: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    this.dataService.getAladinDataFromJson()
    .subscribe((data: any[]) => {
          let aladin = A.aladin(this.aladinDiv.nativeElement, {target: 'LMC', fov: 80, showFullscreenControl: false});
          let moc = A.MOCFromJSON(data, {color: 'magenta', lineWidth: 1});
          aladin.addMOC(moc);
    });
  }
}

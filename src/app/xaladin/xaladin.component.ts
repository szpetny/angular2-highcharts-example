import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from '../shared/data.service';

declare var A: any;

@Component({
  selector: 'x-aladin',
  templateUrl: './xaladin.component.html',
  styleUrls: ['./xaladin.component.css']
})
export class XaladinComponent implements OnInit {
  @ViewChild('makeAladin') aladinDiv: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.dataService.getAladinDataFromJson()
    .subscribe((data: any[]) => {
          let aladin = A.aladin(this.aladinDiv.nativeElement, {target: 'LMC', fov: 80, showFullscreenControl: false});
          let moc = A.MOCFromJSON(data, {color: 'magenta', lineWidth: 1});
          aladin.addMOC(moc);
    });
  }
}

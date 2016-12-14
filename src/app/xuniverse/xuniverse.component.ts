import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { XformComponent } from '../xform/xform.component';
import { XchartComponent } from '../xchart/xchart.component';

@Component({
  selector: 'x-universe',
  templateUrl: './xuniverse.component.html',
  styleUrls: ['./xuniverse.component.css']
})
export class XuniverseComponent implements OnInit {
  boundUpdateServerSettings: Function;
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.boundUpdateServerSettings = this.updateServerSettings.bind(this);
  }
  
  updateServerSettings(data: any): void {
     this.router.navigate(['/xuniverse/xchart', data.serverport, data.filename]);
   }
}

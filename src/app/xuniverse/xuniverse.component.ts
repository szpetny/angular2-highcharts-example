import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HotkeysService, Hotkey} from 'angular2-hotkeys';

import { XformComponent } from '../xform/xform.component';
import { XchartComponent } from '../xchart/xchart.component';

@Component({
  selector: 'x-universe',
  templateUrl: './xuniverse.component.html',
  styleUrls: ['./xuniverse.component.css']
})
export class XuniverseComponent implements OnInit {
  boundUpdateServerSettings: Function;

  constructor(private router: Router, private hotkeysService: HotkeysService) { }

  ngOnInit() {
    this.boundUpdateServerSettings = this.updateServerSettings.bind(this);

     this.hotkeysService.add(new Hotkey('ctrl+y', (event: KeyboardEvent): boolean => {
        console.log('Typed yeti');
        return false; // Prevent bubbling
    }));
  }

  updateServerSettings(data: any): void {
     this.router.navigate(['/xuniverse/xchart', data.serverport, data.filename]);
   }
}

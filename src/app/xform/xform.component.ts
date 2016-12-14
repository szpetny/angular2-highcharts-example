import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'x-form',
  templateUrl: './xform.component.html',
  styleUrls: ['./xform.component.css']
})
export class XformComponent implements OnInit {
  serverSettingsForm: any;
  
  @Input() doAction: Function;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.serverSettingsForm = new FormGroup({
      serverport: new FormControl('', Validators.required),
      filename: new FormControl('', Validators.required)
    });
  }

  submitForm(): void {
     let formData = this.serverSettingsForm.value;
     this.doAction(formData);
   }
}

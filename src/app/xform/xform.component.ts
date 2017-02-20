import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'x-form',
  templateUrl: './xform.component.html',
  styleUrls: ['./xform.component.css']
})
export class XformComponent implements OnInit {
  serverSettings: any;

  @Input() doAction: Function;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.serverSettings = this.fb.group({
      serverport: ['', Validators.required],
      filename: ['', Validators.required]
    });
  }

  submitForm(): void {
     let formData = this.serverSettings.value;
     this.doAction(formData);
   }
}

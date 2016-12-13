import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'x-form',
  templateUrl: './xform.component.html',
  styleUrls: ['./xform.component.css']
})
export class XformComponent {
  serverSettingsForm: any;
  constructor(private router: Router, private fb: FormBuilder) {
    this.serverSettingsForm = this.fb.group({
      serverport: ['', Validators.required],
      filename: ['', Validators.required]
    });
  }

  public updateSettings(event) {
    let formData = this.serverSettingsForm.value;
    this.router.navigate(['/xchart', formData.serverport, formData.filename]);
  }
}

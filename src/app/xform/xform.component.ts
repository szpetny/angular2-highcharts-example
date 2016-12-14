import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'x-form',
  templateUrl: './xform.component.html',
  styleUrls: ['./xform.component.css']
})
export class XformComponent implements OnInit {
  serverSettingsForm: any;
  
  @Input() doAction: Function;
  
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.serverSettingsForm = this.fb.group({
      serverport: ['', Validators.required],
      filename: ['', Validators.required]
    });
  }

  submitForm(): void {
     let formData = this.serverSettingsForm.value;
     this.doAction(formData);
   }
}

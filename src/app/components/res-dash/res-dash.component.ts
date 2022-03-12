import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-res-dash',
  templateUrl: './res-dash.component.html',
  styleUrls: ['./res-dash.component.scss']
})
export class ResDashComponent implements OnInit {
  resFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resFormGroup = this.formBuilder.group({
      name: ['res'],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],
    })
  }

}
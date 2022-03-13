import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { ResData, iResData } from '../../shared/res.model';

@Component({
  selector: 'app-res-dash',
  templateUrl: './res-dash.component.html',
  styleUrls: ['./res-dash.component.scss']
})
export class ResDashComponent implements OnInit {
  resFormGroup: FormGroup;
  res: ResData = new ResData();
  allResData: ResData[];
  // allResData = Array<Object>;
  // res:iResData;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
    ) { }

  ngOnInit() {
    this.resFormGroup = this.formBuilder.group({
      name: ['res'],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],
    });
    this.geRes();

    /* this.resFormGroup = new FormGroup({
      name: new FormControl('rrev')
    }) */
  }

  addRes(){
    this.res.name = this.resFormGroup.value.name;
    this.res.address = this.resFormGroup.value.address;
    this.res.email = this.resFormGroup.value.email;
    this.res.mobile = this.resFormGroup.value.mobile;
    this.res.services = this.resFormGroup.value.services;
    this.api.postRes(this.res).subscribe({
      next: (res) => {
        console.log(res);
        this.resFormGroup.reset();
      },
      error: (e) => {
        console.error(e)
      },
      complete: () => {
        console.log('complete');
      } 
    }) 
  }

  geRes() {
    this.api.getRes().subscribe({
      next: (res) => {
        console.log(res);
        this.allResData = res;
      },
      error: (e) => {
        console.error(e)
      }
      
    }) 
  }

}
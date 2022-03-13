import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  // loginForm: FormGroup;
  count = 1;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log('do check');
  }

  login(form){

    console.log(form['name'].markAsDirty()) 
  }

  getCount(){
    console.log('count',++this.count)
  }

}
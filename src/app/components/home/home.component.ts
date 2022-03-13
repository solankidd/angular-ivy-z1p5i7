import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  login(form){
    console.log(form)
  }

}
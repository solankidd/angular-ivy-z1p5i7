import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  // loginForm: FormGroup;
  count = 1;
  subTry$ = new Subject<string>();
  obs2: Observable<number> = new Observable((obs)=>{
    obs.next(1);
  });
  constructor() { }

  ngOnInit() { 

    const obs = new Observable(obs=>{
      setTimeout(()=>{
        obs.next('test1')
      },1000)
    });

    obs.subscribe({
      next:(output)=>{
        console.log(output);
        this.subTry$.next('subject')
      }
    });

    this.obs2.subscribe({
      next:(output)=>{
        console.log(output);
        this.subTry$.next('subject')
      }
    });

    this.subTry$.subscribe({
      next: (output) => {
        console.log('in='+output)
      }
    })
  }

  ngDoCheck(){
    // console.log('do check');
  }

  login(form){

    console.log(form['name'].markAsDirty()) 
  }

  getCount(){
    // console.log('count',++this.count)
  }

}
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {

  constructor() { }

  @HostBinding('style.color') color: string;
  @HostBinding('style.font-size') size: string;

  @HostListener('mouseover')
  MouseOver(){
    this.color = 'blue';
    this.size = '20px';
  }

  @HostListener('mouseleave')
  MouseLeave(){
    this.color = 'black';
    this.size = '14px';
  }

}
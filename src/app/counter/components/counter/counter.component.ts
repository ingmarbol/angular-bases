import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increase()">+1</button>
  <button (click)="decrease()">-1</button>
  <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent{
  counter:number =10;

  increase():void{
    this.counter+=1;
  }

  decrease():void{
    this.counter-=1;
  }

  reset():void{
    this.counter=10;
  }

}




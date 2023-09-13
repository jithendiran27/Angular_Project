import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count=0;
  increment(){
    console.log("incrementing")
    this.count++

  }
  dcount=0;
  decrement(){
    console.log("decrementing")
    this.dcount++
  }
  get awesomeText(){
    return((this.count-this.dcount)>=10)
  }
}

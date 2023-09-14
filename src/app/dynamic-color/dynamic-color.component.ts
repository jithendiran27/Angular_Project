import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-color',
  templateUrl: './dynamic-color.component.html',
  styleUrls: ['./dynamic-color.component.css']
})
export class DynamicColorComponent {

// clr="red"
clr = "";
colorList=["orange","white","green"]

// colorFinder(event:any){
//    this.clr = event.target.value
// }

colorAdder(){
  this.colorList.push(this.clr)
}

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class BrandComponent  {
  // @Input() name: string;

  @Input() brandName: string;
  @Input() url: string;
  @Input() description: string;
  
  @Input() index;
  // message = "It has been sent from child component";

  @Output() messageEvent = new EventEmitter<string>();

  // sendMessage(){
  //   this.messageEvent.emit(this.message)
  // }

  removeBrand(index){
    this.messageEvent.emit(index);
  }


}

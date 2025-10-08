import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child {

  name = model<string>();
  // @Input() name!: string;
  // @Output() nameChange = new EventEmitter<string>();

  inputChange(value: string) {
    this.name.update(() => value);
  }
}

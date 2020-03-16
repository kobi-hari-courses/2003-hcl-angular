import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit, DoCheck {
  private _a: number = 0;

  @Input()
  set a(value: number) {
    this._a = value;
    this.result = this.a + this.b;
  }
  get a(): number {return this._a;}

  @Input()
  b: number;

  result: number;

  constructor() { }
  
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }

  setA(value: number) {
    this.a = value;
  }

  ngOnInit(): void {
    this.result = this.a + this.b;
  }

}

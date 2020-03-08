import { Component, OnInit } from '@angular/core';
import { AdderService } from 'src/app/services/adder.abstact';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: []
})
export class CalcComponent implements OnInit {
  result: number = 0;

  constructor(
    public adder: AdderService
  ) { }

  add(o1: string, o2: string) {
    const op1 = Number(o1);
    const op2 = Number(o2);

    this.result = this.adder.add(op1, op2);
  }

  ngOnInit(): void {
  }

}

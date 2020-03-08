import { CorrectAdderService } from './../../services/correct-adder.service';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { BASE_URL } from 'src/app/app.module';

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.component.html',
  styleUrls: ['./calc2.component.css'], 
  providers: []
})
export class Calc2Component implements OnInit {
  result: number = 0;

  constructor(
    @Optional() public adder: CorrectAdderService, 
    @Inject(BASE_URL) private url: string
  ) {

      console.log(`My url is: ${url}`);
   }

  add(o1: string, o2: string) {
    const op1 = Number(o1);
    const op2 = Number(o2);

    this.result = this.adder.add(op1, op2);
  }

  ngOnInit(): void {
  }

}

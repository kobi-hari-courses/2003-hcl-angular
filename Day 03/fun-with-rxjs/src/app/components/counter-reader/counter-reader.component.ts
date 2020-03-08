import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit {
  value$: Observable<number>;
  // value: number;
  // private sub: Subscription;

  constructor(private counter: CounterService) { }

  ngOnInit(): void {
    // this.sub = this.counter.getValue()
    //   .subscribe(val => this.value = val);

    this.value$ = this.counter.getValue();
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

}

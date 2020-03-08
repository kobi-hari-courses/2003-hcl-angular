import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject<number>(this.value);

  getValue(): Observable<number> {
    return this.value$.asObservable();
  }

  async increment(): Promise<void> {
    this.value++;
    this.value$.next(this.value);
  }

  async decrement() {
    this.value--;
    this.value$.next(this.value);
  }
}

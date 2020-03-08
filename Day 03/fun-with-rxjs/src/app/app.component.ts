import { Component } from '@angular/core';
import { Observable, interval, Observer, observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


  createInterval(): Observable<number> {
    return interval(1000);
  }

  createObservable(): Observable<number> {
    return new Observable<number>(
      observer => {
        observer.next(42);
        setTimeout(() => observer.next(60), 2000);
        setTimeout(() => observer.next(80), 4000);
        setTimeout(() => observer.next(100), 6000);
        setTimeout(() => observer.next(200), 8000);
        setTimeout(() => observer.complete(), 10000);        
      }
    );
  }

  createSubject(): Observable<number> {
    const s = new Subject<number>();

    s.next(42);
    setTimeout(() => s.next(60), 2000);
    setTimeout(() => s.next(80), 4000);
    setTimeout(() => s.next(100), 6000);
    setTimeout(() => s.next(200), 8000);
    setTimeout(() => s.complete(), 10000);        

    return s;
  }


  createBehaviorSubject(): Observable<number> {
    const s = new BehaviorSubject<number>(42);
    setTimeout(() => s.next(60), 2000);
    setTimeout(() => s.next(80), 4000);
    setTimeout(() => s.next(100), 6000);
    setTimeout(() => s.next(200), 8000);
    setTimeout(() => s.complete(), 10000);        

    return s;
  }

  createObserver(id: number): Observer<number>{
    return {
      next: val => console.log(`observer ${id} next ${val}`), 
      complete: () => console.log(`observer ${id} completed`), 
      error: err => console.log(`observer ${id} error ${err}`)
    }
  }

  go() {
    const observer1 = this.createObserver(1);
    const observer2 = this.createObserver(2);
    const observable = this.createBehaviorSubject();

    observable.subscribe(observer1);
    setTimeout(() => observable.subscribe(observer2), 3500);
  }
}


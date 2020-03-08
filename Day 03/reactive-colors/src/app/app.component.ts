import { ColorsService } from './services/colors.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { ColorModel } from './models/color.model';
import { debounceTime, map, switchMap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors$: Observable<ColorModel[]>;
  search$ = new Subject<string>();
  isBusy$: Observable<boolean>;

  constructor(private service: ColorsService){}

  onInput(value: string) {
    this.search$.next(value);
  }

  ngOnInit(): void {
    this.colors$ = this.search$.pipe(
      debounceTime(500), 
      distinctUntilChanged(), 
      switchMap(str => this.service.search(str))
    );

    const true$ = this.search$.pipe(
      map(_ => true)
    );

    const false$ = this.colors$.pipe(
      map(_ => false)
    );

    this.isBusy$ = merge(true$, false$).pipe(
      distinctUntilChanged()
    );

  }

}

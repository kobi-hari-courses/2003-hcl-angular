import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private count$: Observable<number>;

  constructor(private http:HttpClient) { 
    this.count$ = this.http.get<number>('http://myurl.com');
  }

  getCount() {
    return this.count$;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customersCountPromise: Promise<number> | null = null;

  constructor() { }

  delay() {
    return new Promise(resolve => setTimeout(resolve, 5000));
  }

  private async getCustomersCountFromDb(): Promise<number> {
    // this takes a looooong time
    await this.delay();
    return 42;
  }


  getCustomersCount(): Promise<number> {
    if (this.customersCountPromise === null) {
      this.customersCountPromise = this.getCustomersCountFromDb();
    }

    return this.customersCountPromise;
  }
}

import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-presenter',
  templateUrl: './customer-presenter.component.html',
  styleUrls: ['./customer-presenter.component.css']
})
export class CustomerPresenterComponent implements OnInit {
  counterPromise: Promise<number>;

  constructor(private data: CustomersService) { }

  ngOnInit() {
    this.counterPromise = this.data.getCustomersCount();
  }

}

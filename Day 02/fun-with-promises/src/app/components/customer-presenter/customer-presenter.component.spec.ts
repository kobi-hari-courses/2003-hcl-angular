import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPresenterComponent } from './customer-presenter.component';

describe('CustomerPresenterComponent', () => {
  let component: CustomerPresenterComponent;
  let fixture: ComponentFixture<CustomerPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

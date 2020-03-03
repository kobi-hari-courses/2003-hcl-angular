import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPresenterComponent } from './summary-presenter.component';

describe('SummaryPresenterComponent', () => {
  let component: SummaryPresenterComponent;
  let fixture: ComponentFixture<SummaryPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

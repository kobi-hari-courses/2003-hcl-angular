import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsDoneComponent } from './is-done.component';

describe('IsDoneComponent', () => {
  let component: IsDoneComponent;
  let fixture: ComponentFixture<IsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

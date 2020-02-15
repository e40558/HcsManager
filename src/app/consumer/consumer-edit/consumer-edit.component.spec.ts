import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerEditComponent } from './consumer-edit.component';

describe('ConsumerEditComponent', () => {
  let component: ConsumerEditComponent;
  let fixture: ComponentFixture<ConsumerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustOrderHistoryGridComponent } from './cust-order-history-grid.component';

describe('CustOrderHistoryGridComponent', () => {
  let component: CustOrderHistoryGridComponent;
  let fixture: ComponentFixture<CustOrderHistoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustOrderHistoryGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustOrderHistoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

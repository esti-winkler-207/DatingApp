import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomersGridComponent } from './search-customers-grid.component';

describe('SearchCustomersGridComponent', () => {
  let component: SearchCustomersGridComponent;
  let fixture: ComponentFixture<SearchCustomersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCustomersGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

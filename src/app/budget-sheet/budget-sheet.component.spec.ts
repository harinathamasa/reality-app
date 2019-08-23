import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSheetComponent } from './budget-sheet.component';

describe('BudgetSheetComponent', () => {
  let component: BudgetSheetComponent;
  let fixture: ComponentFixture<BudgetSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

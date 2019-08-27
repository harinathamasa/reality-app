import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInsuranceComponent } from './pet-insurance.component';

describe('PetInsuranceComponent', () => {
  let component: PetInsuranceComponent;
  let fixture: ComponentFixture<PetInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

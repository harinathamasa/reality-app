import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondJobComponent } from './second-job.component';

describe('SecondJobComponent', () => {
  let component: SecondJobComponent;
  let fixture: ComponentFixture<SecondJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

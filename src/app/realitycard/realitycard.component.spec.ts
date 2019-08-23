import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealitycardComponent } from './realitycard.component';

describe('RealitycardComponent', () => {
  let component: RealitycardComponent;
  let fixture: ComponentFixture<RealitycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealitycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

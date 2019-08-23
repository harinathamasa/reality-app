import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealityDialogComponent } from './reality-dialog.component';

describe('RealityDialogComponent', () => {
  let component: RealityDialogComponent;
  let fixture: ComponentFixture<RealityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingDialogComponent } from './clothing-dialog.component';

describe('ClothingDialogComponent', () => {
  let component: ClothingDialogComponent;
  let fixture: ComponentFixture<ClothingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

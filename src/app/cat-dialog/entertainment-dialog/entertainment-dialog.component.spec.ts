import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentDialogComponent } from './entertainment-dialog.component';

describe('EntertainmentDialogComponent', () => {
  let component: EntertainmentDialogComponent;
  let fixture: ComponentFixture<EntertainmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

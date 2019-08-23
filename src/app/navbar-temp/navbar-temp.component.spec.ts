import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTempComponent } from './navbar-temp.component';

describe('NavbarTempComponent', () => {
  let component: NavbarTempComponent;
  let fixture: ComponentFixture<NavbarTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

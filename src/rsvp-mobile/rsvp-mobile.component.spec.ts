import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpMobileComponent } from './rsvp-mobile.component';

describe('RsvpMobileComponent', () => {
  let component: RsvpMobileComponent;
  let fixture: ComponentFixture<RsvpMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

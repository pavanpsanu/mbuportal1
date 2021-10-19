import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsLinkComponent } from './events-link.component';

describe('EventsLinkComponent', () => {
  let component: EventsLinkComponent;
  let fixture: ComponentFixture<EventsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

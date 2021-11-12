import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveinactivesubscriptionsComponent } from './activeinactivesubscriptions.component';

describe('ActiveinactivesubscriptionsComponent', () => {
  let component: ActiveinactivesubscriptionsComponent;
  let fixture: ComponentFixture<ActiveinactivesubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveinactivesubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveinactivesubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndAutomationComponent } from './design-and-automation.component';

describe('DesignAndAutomationComponent', () => {
  let component: DesignAndAutomationComponent;
  let fixture: ComponentFixture<DesignAndAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignAndAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAndAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

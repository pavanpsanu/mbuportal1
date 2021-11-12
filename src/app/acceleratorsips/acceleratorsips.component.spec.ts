import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratorsipsComponent } from './acceleratorsips.component';

describe('AcceleratorsipsComponent', () => {
  let component: AcceleratorsipsComponent;
  let fixture: ComponentFixture<AcceleratorsipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceleratorsipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratorsipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

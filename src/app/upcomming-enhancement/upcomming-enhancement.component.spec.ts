import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingEnhancementComponent } from './upcomming-enhancement.component';

describe('UpcommingEnhancementComponent', () => {
  let component: UpcommingEnhancementComponent;
  let fixture: ComponentFixture<UpcommingEnhancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingEnhancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

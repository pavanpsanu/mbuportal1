import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanddontsComponent } from './doanddonts.component';

describe('DoanddontsComponent', () => {
  let component: DoanddontsComponent;
  let fixture: ComponentFixture<DoanddontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoanddontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoanddontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

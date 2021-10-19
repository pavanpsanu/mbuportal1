import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityAnalysisComponent } from './sustainability-analysis.component';

describe('SustainabilityAnalysisComponent', () => {
  let component: SustainabilityAnalysisComponent;
  let fixture: ComponentFixture<SustainabilityAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

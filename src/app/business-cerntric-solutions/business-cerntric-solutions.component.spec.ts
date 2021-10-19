import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCerntricSolutionsComponent } from './business-cerntric-solutions.component';

describe('BusinessCerntricSolutionsComponent', () => {
  let component: BusinessCerntricSolutionsComponent;
  let fixture: ComponentFixture<BusinessCerntricSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCerntricSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCerntricSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

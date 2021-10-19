import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationMapComponent } from './certification-map.component';

describe('CertificationMapComponent', () => {
  let component: CertificationMapComponent;
  let fixture: ComponentFixture<CertificationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

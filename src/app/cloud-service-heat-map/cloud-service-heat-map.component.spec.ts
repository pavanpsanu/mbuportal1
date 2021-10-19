import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServiceHeatMapComponent } from './cloud-service-heat-map.component';

describe('CloudServiceHeatMapComponent', () => {
  let component: CloudServiceHeatMapComponent;
  let fixture: ComponentFixture<CloudServiceHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudServiceHeatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudServiceHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

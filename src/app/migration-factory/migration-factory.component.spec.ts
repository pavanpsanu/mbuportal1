import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationFactoryComponent } from './migration-factory.component';

describe('MigrationFactoryComponent', () => {
  let component: MigrationFactoryComponent;
  let fixture: ComponentFixture<MigrationFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

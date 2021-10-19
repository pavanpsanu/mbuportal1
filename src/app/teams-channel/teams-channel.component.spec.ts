import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsChannelComponent } from './teams-channel.component';

describe('TeamsChannelComponent', () => {
  let component: TeamsChannelComponent;
  let fixture: ComponentFixture<TeamsChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

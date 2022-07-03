import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopointsComponent } from './geopoints';

describe('SingleGeoPointComponent', () => {
  let component: GeopointsComponent;
  let fixture: ComponentFixture<GeopointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeopointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazorcounterComponent } from './blazorcounter.component';

describe('BlazorcounterComponent', () => {
  let component: BlazorcounterComponent;
  let fixture: ComponentFixture<BlazorcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazorcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazorcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

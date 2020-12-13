import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAjoutComponent } from './flight-ajout.component';

describe('FlightAjoutComponent', () => {
  let component: FlightAjoutComponent;
  let fixture: ComponentFixture<FlightAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestReservationComponent } from './gest-reservation.component';

describe('GestReservationComponent', () => {
  let component: GestReservationComponent;
  let fixture: ComponentFixture<GestReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

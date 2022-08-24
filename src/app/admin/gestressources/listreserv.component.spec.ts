import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservComponent } from './listreserv.component';

describe('ListreservComponent', () => {
  let component: ListreservComponent;
  let fixture: ComponentFixture<ListreservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

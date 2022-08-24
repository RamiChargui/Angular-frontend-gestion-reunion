import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreservComponent } from './newreserv.component';

describe('NewreservComponent', () => {
  let component: NewreservComponent;
  let fixture: ComponentFixture<NewreservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewreservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewreservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

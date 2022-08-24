import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmatComponent } from './newmat.component';

describe('NewmatComponent', () => {
  let component: NewmatComponent;
  let fixture: ComponentFixture<NewmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

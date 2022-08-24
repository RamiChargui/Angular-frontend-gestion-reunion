import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeptComponent } from './newdept.component';

describe('NewdeptComponent', () => {
  let component: NewdeptComponent;
  let fixture: ComponentFixture<NewdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

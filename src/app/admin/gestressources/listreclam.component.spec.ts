import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreclamComponent } from './listreclam.component';

describe('ListreclamComponent', () => {
  let component: ListreclamComponent;
  let fixture: ComponentFixture<ListreclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreclamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

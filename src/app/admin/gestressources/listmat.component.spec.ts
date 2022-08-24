import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmatComponent } from './listmat.component';

describe('ListmatComponent', () => {
  let component: ListmatComponent;
  let fixture: ComponentFixture<ListmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

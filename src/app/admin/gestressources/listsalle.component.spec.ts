import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsalleComponent } from './listsalle.component';

describe('ListsalleComponent', () => {
  let component: ListsalleComponent;
  let fixture: ComponentFixture<ListsalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

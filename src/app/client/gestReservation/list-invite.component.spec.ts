import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInviteComponent } from './list-invite.component';

describe('ListInviteComponent', () => {
  let component: ListInviteComponent;
  let fixture: ComponentFixture<ListInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

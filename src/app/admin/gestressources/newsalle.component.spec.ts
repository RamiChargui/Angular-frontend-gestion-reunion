import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsalleComponent } from './newsalle.component';

describe('NewsalleComponent', () => {
  let component: NewsalleComponent;
  let fixture: ComponentFixture<NewsalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

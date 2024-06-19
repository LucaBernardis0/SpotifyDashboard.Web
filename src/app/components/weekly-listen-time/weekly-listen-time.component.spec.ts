import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyListenTimeComponent } from './weekly-listen-time.component';

describe('WeeklyListenTimeComponent', () => {
  let component: WeeklyListenTimeComponent;
  let fixture: ComponentFixture<WeeklyListenTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyListenTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyListenTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

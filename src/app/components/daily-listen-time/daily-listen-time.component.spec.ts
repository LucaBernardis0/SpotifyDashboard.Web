import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyListenTimeComponent } from './daily-listen-time.component';

describe('DailyListenTimeComponent', () => {
  let component: DailyListenTimeComponent;
  let fixture: ComponentFixture<DailyListenTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyListenTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyListenTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

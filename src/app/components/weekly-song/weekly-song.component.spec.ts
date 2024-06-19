import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySongComponent } from './weekly-song.component';

describe('WeeklySongComponent', () => {
  let component: WeeklySongComponent;
  let fixture: ComponentFixture<WeeklySongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklySongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

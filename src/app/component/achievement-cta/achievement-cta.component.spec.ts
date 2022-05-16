import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementCtaComponent } from './achievement-cta.component';

describe('AchievementCtaComponent', () => {
  let component: AchievementCtaComponent;
  let fixture: ComponentFixture<AchievementCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

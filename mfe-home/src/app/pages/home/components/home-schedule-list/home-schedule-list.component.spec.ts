import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScheduleListComponent } from './home-schedule-list.component';

describe('HomeScheduleListComponent', () => {
  let component: HomeScheduleListComponent;
  let fixture: ComponentFixture<HomeScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeScheduleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

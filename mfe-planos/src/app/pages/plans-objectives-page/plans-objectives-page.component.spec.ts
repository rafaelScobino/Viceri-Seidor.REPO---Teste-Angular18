import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansObjectivesPageComponent } from './plans-objectives-page.component';

describe('PlansObjectivesPageComponent', () => {
  let component: PlansObjectivesPageComponent;
  let fixture: ComponentFixture<PlansObjectivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansObjectivesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansObjectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveProblemsContainerComponent } from './objective-problems-container.component';

describe('ObjectiveProblemsContainerComponent', () => {
  let component: ObjectiveProblemsContainerComponent;
  let fixture: ComponentFixture<ObjectiveProblemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveProblemsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveProblemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

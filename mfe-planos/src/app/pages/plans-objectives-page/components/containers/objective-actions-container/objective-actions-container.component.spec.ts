import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveActionsContainerComponent } from './objective-actions-container.component';

describe('ObjectiveActionsContainerComponent', () => {
  let component: ObjectiveActionsContainerComponent;
  let fixture: ComponentFixture<ObjectiveActionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveActionsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveActionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

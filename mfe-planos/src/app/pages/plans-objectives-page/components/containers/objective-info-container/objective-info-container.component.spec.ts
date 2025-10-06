import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveInfoContainerComponent } from './objective-info-container.component';

describe('ObjectiveInfoContainerComponent', () => {
  let component: ObjectiveInfoContainerComponent;
  let fixture: ComponentFixture<ObjectiveInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveInfoContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

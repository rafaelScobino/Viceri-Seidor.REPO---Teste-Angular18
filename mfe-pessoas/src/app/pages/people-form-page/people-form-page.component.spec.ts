import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFormContainerComponent } from './people-form-page.component';

describe('PeopleFormContainerComponent', () => {
  let component: PeopleFormContainerComponent;
  let fixture: ComponentFixture<PeopleFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleFormContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

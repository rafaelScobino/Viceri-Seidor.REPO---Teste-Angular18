import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansListPageComponent } from './plans-list-page.component';

describe('PlansListPageComponent', () => {
  let component: PlansListPageComponent;
  let fixture: ComponentFixture<PlansListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

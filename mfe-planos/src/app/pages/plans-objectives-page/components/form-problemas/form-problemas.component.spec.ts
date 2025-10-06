import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProblemasComponent } from './form-problemas.component';

describe('FormProblemasComponent', () => {
  let component: FormProblemasComponent;
  let fixture: ComponentFixture<FormProblemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProblemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
